"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_model_js_1 = require("../models/category-model.js");
//type RequestWithBody<T> = Request<{}, {}, T>;
//TODO: 1) Отримання всіх категорії
// 2) Отримання 1 категорії за id (params)
class CategoryController {
    static async create(req, res) {
        const category = await category_model_js_1.Category.create({ ...req.body }); //INSERT TO DB
        if (category) {
            return res.status(201).json({
                message: "Category created successfully",
                data: category.dataValues,
            });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
}
exports.CategoryController = CategoryController;
