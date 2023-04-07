import { getDatabaseConnection } from '@/lib/getDBConnection';
import { User } from '@/src/entity/User';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { QueryFailedError } from 'typeorm';

const Users: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { username, password, passwordConfirmation } = req.body;

  const connection = await getDatabaseConnection();
  const user = new User();
  user.username = username;
  user.password = password;
  user.passwordConfirmation = passwordConfirmation;
  await user.validate();

  res.setHeader('Content-type', 'application/json; charset=utf-8');
  if (user.hasErrors()) {
    res.statusCode = 422;
    res.write(JSON.stringify(user.errors));
    res.end();
  } else {
    try {
      await connection.manager.save(user);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        console.log('-------------------');
        console.log(Object.keys(e));
        console.log(e.message);
        console.log('-------------------');
      }
    }
    res.statusCode = 200;
    res.write(JSON.stringify(user));
    res.end();
  }
};
export default Users;
