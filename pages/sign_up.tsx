import { FormEvent, useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function SignUp() {
  const [formData, setFromData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const [errors, setErrors] = useState({
    username: [],
    password: [],
    passwordConfirmation: [],
  });

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log(formData);
      axios.post(`/api/v1/users`, formData).then(
        () => {},
        (error) => {
          if (error instanceof AxiosError && error.response.status === 422) {
            const { response } = error;
            const a = response.data;
            setErrors({ ...errors, ...response.data });
          }
        }
      );
    },
    [formData]
  );

  return (
    <>
      <h1>Sign Up Page</h1>
      {JSON.stringify(formData)}
      <br></br>
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
        </div>

        <div>
          <label htmlFor="">
            修改密码
            <input
              type="password"
              value={formData.passwordConfirmation}
              onChange={(e) =>
                setFromData({
                  ...formData,
                  passwordConfirmation: e.target.value,
                })
              }
            />
          </label>
        </div>

        <div>
          <button type="submit">注册</button>
        </div>
      </form>
    </>
  );
}
