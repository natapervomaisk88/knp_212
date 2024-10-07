import express from "express";
import path from "node:path";
import { products } from "./data/products.js";
import createProduct from "./middlewares/product-middleware.js";
import productRoutes from "./routers/product-routes.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json()); //middleware
app.use(express.static("public")); //middleware
app.use("/products", productRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send();
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
