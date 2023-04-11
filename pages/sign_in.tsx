import { withIronSessionSsr } from 'iron-session/next';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { User } from '@/src/entity/User';
import { withSessionSsr } from '@/lib/withSession';

type Props = {
  user: User;
};

export default function SignIn(props: Props) {
  const { user } = props;

  const defaultErrors = { username: [], password: [] };
  const [formData, setFromData] = useState({
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

  return (
    <>
      {user.username ? <h1>当前用户登录为 {user.username}</h1> : null}

      <h1>Sign In Page</h1>
      {JSON.stringify(formData)}
      <br />
      {JSON.stringify(errors)}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">
            用户名
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFromData({
                  ...formData,
                  username: e.target.value,
                })
              }
            />
          </label>
          {errors.username.length > 0 && errors.username[0]}
        </div>

        <div>
          <label htmlFor="">
            密码
            <input
              type="passowrd"
              value={formData.password}
              onChange={(e) =>
                setFromData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </label>
          {errors.password.length > 0 && errors.password[0]}
        </div>

        <div>
          <button type="submit">登录</button>
        </div>
      </form>
    </>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    return {
      props: {
        user: req.session.user,
      },
    };
  }
);
