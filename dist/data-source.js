"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
var _Post = require("./entity/Post");
var _User = require("./entity/User");
var _Comment = require("./entity/Comment");
var AppDataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "blog",
  password: "",
  database: "blog_development",
  synchronize: false,
  logging: false,
  entities: [_Post.Post, _User.User, _Comment.Comment],
  migrations: ['./dist/migration/**/*.js'],
  subscribers: ['./dist/subscribers/**/*.js']
});
exports.AppDataSource = AppDataSource;