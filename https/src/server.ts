import express from "express";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import booksRouter from "./routes/books-routes.js";
import { connectionDb } from "./config/mysql-config.js";
const __dirname = import.meta.dirname;
const PORT = 443;

const serverRun = () => {
  const app = express();
  const options = {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
  };

  https
    .createServer(options, app)
    .listen(PORT, () => console.log(`Server is running https://127.0.0.1`));

  app.use(express.json());
  app.use("/books", booksRouter);

  app.all("*", (req, res) => {
    res.status(404).send("Not Found");
  });
};

connectionDb.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    serverRun();
  }
});
