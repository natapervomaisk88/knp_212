import express from "express";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import "dotenv/config";
import { categoryRouter } from "./routes/category-route.js";
import { connection } from "./config/config.js";
import { productRouter } from "./routes/product-route.js";
const PORT = process.env.PORT || 443;
connection
  .sync()
  .then(() => {
    const app = express();

    const options = {
      key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
    };
    app.use(express.json());
    app.use("/category", categoryRouter);
    app.use("/product", productRouter);
    https
      .createServer(options, app)
      .listen(PORT, () => console.log(`Server is running https://127.0.0.1`));
  })
  .catch((err) => {
    console.error(err);
  });
