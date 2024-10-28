import { Sequelize } from "sequelize-typescript";
import { Category } from "../models/category-model";
import "dotenv/config";
import { Product } from "../models/product-model";

export const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Category, Product],
});
