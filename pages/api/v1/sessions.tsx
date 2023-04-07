import { getDatabaseConnection } from '@/lib/getDBConnection';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/src/entity/User';
import md5 from 'md5';

export default async function Sessions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get user info from clinet req
  const { username, password } = req.body;
  res.setHeader('Content-type', 'application/json; charset=utf-8');
  const errors = { password: [], username: [] };

  const connection = await getDatabaseConnection();
  const user = await connection.manager.findOne(User, { where: { username } });
  console.log(`username is xxxx${username}xxxx`);

  if (user) {
    // check the password
    if (md5(password) === user.password_digest) {
      res.statusCode = 200;
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 422;
      errors.password.push('密码和用户名不匹配');
      res.end(JSON.stringify(errors));
    }
  } else {
    if (username === '') {
      // username is ''
      res.statusCode = 422;
      errors.username.push('用户名不能为空');
      res.end(JSON.stringify(errors));
      return;
    }
    // user not found
    res.statusCode = 422;
    errors.username.push('用户名不存在');
    res.end(JSON.stringify(errors));
    return;
  }
}
