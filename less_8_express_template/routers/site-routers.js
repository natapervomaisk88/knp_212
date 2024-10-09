import { Router } from "express";
const siteRouters = Router();
siteRouters.get("/", (req, res) => {
  res.render("home", { title: "My App" });
});
siteRouters.get("/contacts", (req, res) => {
  res.render("contacts", { contacts: ["str Sadovaya 2", "str Sadovaya 5"] });
});
export default siteRouters;
