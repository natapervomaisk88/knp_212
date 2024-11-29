import { Post } from "../models/post-model";
import { User } from "../models/user-model";
import { Request, Response } from "express";

export class UserController {
  static async create(
    req: Request<{}, {}, { name: string; login: string }>,
    res: Response
  ): Promise<any> {
    const user = await User.create({ ...req.body }); //INSERT TO DB
    if (user) {
      return res.status(201).json({
        message: "User created successfully",
        data: user.dataValues,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async read(req: Request, res: Response): Promise<any> {
    const users = await User.findAll(); //SELECT TO DB
    if (users) {
      return res.status(201).json({
        message: "List of users",
        data: users,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readUserAndPosts(req: Request, res: Response): Promise<any> {
    const users = await User.findAll({ include: Post }); //SELECT TO DB
    if (users) {
      return res.status(201).json({
        message: "List of users",
        data: users,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }

  static async readUserById(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<any> {
    const users = await User.findByPk(Number(req.params.id), { include: Post }); //SELECT TO DB
    if (users) {
      return res.status(201).json({
        message: "User and posts",
        data: users,
      });
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}
