import * as ironsession from "iron-session";

interface PostType {
  id: string,
  created_at: string,
  updated_at: string,
  title: string,
  content: string,
  author_id: string,
  author: undefined,
  comments: undefined;
}

declare module "iron-session" {
  import { User } from "./src/entity/User";
  interface IronSessionData {
    user?: User;
  }
} 