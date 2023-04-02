import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const Users: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(req.body);
  const { username, passowrd, passwordConfirmation } = req.body;
  if (passowrd !== passwordConfirmation) {
    const error = {
      passwordConfirmation: ['密码不匹配'],
    };
    res.statusCode = 422;
    res.write(JSON.stringify(error));
  }
  res.statusCode = 200;
  res.write('chenggongzhuce');
  res.end();
};
export default Users;
