// const simple = (value) => {
//   return new Promise((resolve, reject) => {
//     if (value > 0) resolve("value>0");
//     else reject("value<=0");
//   });
// };

// simple(-10)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
import path from "node:path";
import fs from "node:fs/promises";
import { Buffer } from "node:buffer";
const buff = Buffer.from("NodeJs Programm");
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
fs.writeFile(pathToFile, buff)
  .then(() => {
    console.log("Файл був успішно створений");
    fs.readFile(pathToFile)
      .then((data) => console.log(data.toString()))
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
