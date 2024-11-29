import path from "node:path";
import fs from "node:fs";
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
import { log } from "node:console";
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(
  path.join(pathToFolder, "new_data.txt")
);
readStream
.on('open',()=>{})
.pipe(writeStream); //Duplex Stream

readStream.on("data", (chunk) => {
  log(`start chunk\n`);
  log(chunk);
  writeStream.write(chunk);
  log(chunk.length);
  log(`end chunk\n`);
  readStream.pause(); //зупинка
  setTimeout(() => {
    readStream.resume();
  }, 5000);
});
readStream.on("close", () => {
  log(`File was closed`);
});
readStream.on("end", () => {
  log("File was successfuly read");
});

readStream.on("open", () => {
  log(`File was opened`);
});
