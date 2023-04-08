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

  const sigInChecker = new SignInChecker(username, password);
  await sigInChecker.validate();
  if (sigInChecker.hasErrors()) {
    res.statusCode = 422;
    res.end(JSON.stringify(sigInChecker.errors));
    return;
  } else {
    res.statusCode = 200;
    res.end(JSON.stringify(sigInChecker.user));
    return;
  }
}

// todo -> put this to sigle file (but a little bug will show)
// ReferenceError: Cannot access 'User' before initialization at Module.User
class SignInChecker {
  private username: string;
  private password: string;
  public user: User;
  public errors = {
    username: [] as string[],
    password: [] as string[],
  };

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  async validate() {
    if (this.username.trim() === '') {
      this.errors.username.push('用户名不能为空');
    }
    const connection = await getDatabaseConnection();
    const user = await connection.manager.findOne(User, {
      where: {
        username: this.username,
      },
    });
    this.user = user;
    if (user) {
      if (user.password_digest !== md5(this.password)) {
        this.errors.password.push('密码与用户名不匹配');
      }
    } else {
      this.errors.username.push('用户名不存在');
    }
  }

  hasErrors() {
    return this.errors.username.length > 0 || this.errors.password.length > 0;
  }
}
