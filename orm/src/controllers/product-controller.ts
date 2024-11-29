import { Product } from "../models/product-model";
import { Request, Response } from "express";

export class ProductController {
  static async create(
    req: Request<{}, {}, { title: string; price: number; id_category: number }>,
    res: Response
  ): Promise<any> {
    const product = await Product.create({ ...req.body }); //INSERT TO DB
    if (product) {
      return res.status(201).json({
        message: "Product created successfully",
        data: product.dataValues,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async read(req: Request, res: Response): Promise<any> {
    const products = await Product.findAll(); //SELECT TO DB
    if (products) {
      return res.status(201).json({
        message: "List of products",
        data: products,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
