import { FormEvent, useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { User } from '@/src/entity/User';
import { withSessionSsr } from '@/lib/withSession';
import { Form } from '@/components/Form';

type Props = {
  user: User;
};
type ThisFormData = {
  username: string;
  password: string;
};

export default function SignIn(props: Props) {
  const { user } = props;

  const defaultErrors = { username: [], password: [] };
  const [formData, setFromData] = useState<ThisFormData>({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState(defaultErrors);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post(`/api/v1/sessions`, formData).then(
      () => {
        // sccess handle
        setErrors(defaultErrors);
      },
      (error) => {
        if (error instanceof AxiosError && error.response.status === 422) {
          const {
            response: { data },
          } = error;
          setErrors(data);
        }
      }
    );
  };

  const onChange = useCallback(
    (key: keyof ThisFormData, value: string | number) => {
      setFromData({
        ...formData,
        [key]: value,
      });
    },
    [formData]
  );

  return (
    <>
      {user && <h1>{user.username}</h1>}
      <h1>Sign In Page</h1>
      {JSON.stringify(formData)}
      <br />
      {JSON.stringify(errors)}
      <Form
        fields={[
          {
            label: '用户名',
            value: formData.username,
            type: 'text',
            onChange: (e) => onChange('username', e.target.value),
            errors: errors.username,
          },
          {
            label: '密码',
            value: formData.password,
            type: 'password',
            onChange: (e) => onChange('password', e.target.value),
            errors: errors.password,
          },
        ]}
        onSubmit={onSubmit}
        button={<button type="submit">登录</button>}
      />
    </>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const {
      session: { user },
    } = req;
    return {
      props: { user: user ? user : null },
    };
  }
);
