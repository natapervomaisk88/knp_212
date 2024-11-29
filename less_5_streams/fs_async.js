import path from "node:path";
import fs from "node:fs";
import { Buffer } from "node:buffer";
const buff = Buffer.from("NodeJs Programm");
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
fs.access(pathToFolder, (err) => {
  if (err) {
    if (err.code === "ENOENT") {
      //create folder
      fs.mkdir(pathToFolder, (err) => {
        if (err) {
          console.log(err);
          process.exit();
        }
      });
    } else {
      console.log(err);
      process.exit();
    }
  }
  //пишемо файл
  fs.writeFile(pathToFile, buff, (err) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    //читаємо файл
    fs.readFile(pathToFile, (err, data) => {
      if (err === null) {
        console.log(data.toString());
      }
    });
  });
});
