import { getDatabaseConnection } from '@/lib/getDBConnection';
import { User } from '@/src/entity/User';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import md5 from 'md5';

const Users: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { username, password, passwordConfirmation } = req.body;
  const errors = {
    password: [] as string[],
    username: [] as string[],
    passwordConfirmation: [] as string[],
  };
  if (username.trim().length === 0) {
    errors.username.push('用户名不能为空');
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
    errors.username.push('用户名格式不正确，只能包含字母数字和下划线');
  }
  if (username.trim().length > 42) {
    errors.username.push('用户名太长');
  }
  if (username.trim().length <= 3) {
    errors.username.push('用户名太短');
  }
  if (password === '') {
    errors.password.push('密码不能为空');
  }
  if (password !== passwordConfirmation) {
    errors.passwordConfirmation.push('密码不匹配');
  }

  const hasErrors = Object.values(errors).find((v) => v.length > 0);
  res.setHeader('Content-type', 'application/json; charset=utf-8');
  if (hasErrors) {
    res.statusCode = 422;
    res.write(JSON.stringify(errors));
    res.end();
  } else {
    const connection = await getDatabaseConnection();
    const user = new User();
    user.username = username;
    user.password_digest = md5(password);
    await connection.manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
    res.end();
  }
};
export default Users;
