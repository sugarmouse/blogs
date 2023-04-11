import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { NextApiHandler } from "next";
import { GetServerSideProps } from "next";

export function withSession(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, {
    cookieName: 'blog',
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieOptions: {}
  });
}

export function withSessionSsr(handler: GetServerSideProps) {
  return withIronSessionSsr(handler, {
    cookieName: 'blog',
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieOptions: {}
  });
}
