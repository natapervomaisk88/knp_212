import path from "node:path";
import fs from "node:fs";
import { log } from "node:console";
const __dirname = import.meta.dirname;
const my_dir = path.join(__dirname, "files");
if (!fs.existsSync(my_dir)) {
  fs.mkdirSync(my_dir);
}
const our_file = path.join(my_dir, "data.txt");
const buff = Buffer.from(`Hello from Node js\n`);
//fs.writeFileSync(path.join(my_dir, "data.txt"), buff);
fs.appendFileSync(our_file, buff);
const content = fs.readFileSync(our_file);
log(content.toString());
