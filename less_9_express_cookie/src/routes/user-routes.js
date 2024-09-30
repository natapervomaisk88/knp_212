import { Router } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
const userRoutes = Router();

userRoutes
  .route("/signup")
  .get((req, res) => {
    res.render("form_signup");
  })
  .post((req, res) => {
    //TODO: перевірка існування body
    //валідація даних   console.log(validator.isEmail(req.body.email));
    // Хешуємо пароль console.log(bcrypt.hashSync(req.body.password, 10));
    //bcrypt.compareSync()
    res.cookie("user", req.body.login, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });
    res.redirect("/");
  });

export default userRoutes;
