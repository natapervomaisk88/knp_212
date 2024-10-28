"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_https_1 = __importDefault(require("node:https"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
require("dotenv/config");
const category_route_js_1 = require("./routes/category-route.js");
const config_js_1 = require("./config/config.js");
const product_route_js_1 = require("./routes/product-route.js");
const PORT = process.env.PORT || 443;
config_js_1.connection
    .sync()
    .then(() => {
    const app = (0, express_1.default)();
    const options = {
        key: node_fs_1.default.readFileSync(node_path_1.default.join(__dirname, "..", "cert", "key.pem")),
        cert: node_fs_1.default.readFileSync(node_path_1.default.join(__dirname, "..", "cert", "cert.pem")),
    };
    app.use(express_1.default.json());
    app.use("/category", category_route_js_1.categoryRouter);
    app.use("/product", product_route_js_1.productRouter);
    node_https_1.default
        .createServer(options, app)
        .listen(PORT, () => console.log(`Server is running https://127.0.0.1`));
})
    .catch((err) => {
    console.error(err);
});
