import { Category } from "../models/category-model.js";
import { Request, Response } from "express";

//type RequestWithBody<T> = Request<{}, {}, T>;

//TODO: 1) Отримання всіх категорії
// 2) Отримання 1 категорії за id (params)
export class CategoryController {
  static async create(
    req: Request<{}, {}, { title: string }>,
    res: Response
  ): Promise<any> {
    const category = await Category.create({ ...req.body }); //INSERT TO DB
    if (category) {
      return res.status(201).json({
        message: "Category created successfully",
        data: category.dataValues,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
