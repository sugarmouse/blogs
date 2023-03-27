"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
var AppDataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "blog",
  password: "",
  database: "blog_development",
  synchronize: true,
  logging: false,
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscribers/**/*.js']
});
exports.AppDataSource = AppDataSource;