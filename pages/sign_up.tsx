import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function SignUp() {
  const [formData, setFromData] = useState({
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
          {errors.username && errors.username.length > 0 ? (
            <div>{errors.username.join(',')}</div>
          ) : null}
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
          {errors.password && errors.password.length > 0 ? (
            <div>{errors.password.join(',')}</div>
          ) : null}
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
          {errors.passwordConfirmation &&
          errors.passwordConfirmation.length > 0 ? (
            <div>{errors.passwordConfirmation.join(',')}</div>
          ) : null}
        </div>

        <div>
          <button type="submit">注册</button>
        </div>
      </form>
    </>
  );
}
