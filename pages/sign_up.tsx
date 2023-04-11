import { FormEvent, useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { Form } from '@/components/Form';

type ThisFormData = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUp() {
  const [formData, setFromData] = useState<ThisFormData>({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const defaultErrors = {
    username: [],
    password: [],
    passwordConfirmation: [],
  };

  const [errors, setErrors] = useState(defaultErrors);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post(`/api/v1/users`, formData).then(
      () => {
        // sccess handle
        setErrors(defaultErrors);
        window.alert('注册成功');
        window.location.href = '/sign_in';
      },
      (error) => {
        // error handle
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.status === 422
        ) {
          const {
            response: { data },
          } = error;
          setErrors({ ...errors, ...data });
        } else {
          console.log('some other errors');
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
      <h1>Sign Up Page</h1>
      {JSON.stringify(formData)}
      <br></br>
      {JSON.stringify(errors)}
      <Form
        fields={[
          {
            label: '用户名',
            type: 'text',
            value: formData.username,
            onChange: (e) => onChange('username', e.target.value),
            errors: errors.username,
          },
          {
            label: '密码',
            type: 'password',
            value: formData.password,
            onChange: (e) => onChange('password', e.target.value),
            errors: errors.password,
          },
          {
            label: '确认密码',
            type: 'password',
            value: formData.passwordConfirmation,
            onChange: (e) => onChange('passwordConfirmation', e.target.value),
            errors: errors.passwordConfirmation,
          },
        ]}
        onSubmit={onSubmit}
        button={<button type="submit">注册</button>}
      />
    </>
  );
}
