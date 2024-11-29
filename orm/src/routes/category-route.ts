import { Router } from "express";
import { CategoryController } from "../controllers/category-controller";
export const categoryRouter = Router();

categoryRouter.route("/").post(CategoryController.create);
