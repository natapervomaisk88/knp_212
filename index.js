/*
1) Common Js modules (exports->require) NODE
2) ES modules (export->import) 
*/
// const User = require("./User");
import User from "./User.js";
import chalk from "chalk";
const user = new User("Alex", 22);
console.log(chalk.cyan(user.toString()));
