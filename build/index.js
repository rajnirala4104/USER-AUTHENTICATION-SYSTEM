"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_color_1 = __importDefault(require("cli-color"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config({
    path: "./.env",
});
const port = process.env.PORT || 8000;
app_1.app.listen(port, () => {
    console.log(cli_color_1.default.yellow(`server is running:-  http://127.0.0.1:${port}/`));
});
