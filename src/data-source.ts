import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";
import { User } from "./entity/User";
import { Comment } from "./entity/Comment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "blog",
    password: "",
    database: "blog_development",
    synchronize: false,
    logging: false,
    entities: [
        Post, User, Comment
    ],
    migrations: [
        './dist/migration/**/*.js'
    ],
    subscribers: [
        './dist/subscribers/**/*.js'
    ]
});
