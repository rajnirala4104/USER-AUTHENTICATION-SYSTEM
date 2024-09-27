"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_color_1 = __importDefault(require("cli-color"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const connectDB_1 = require("./database/connectDB");
dotenv_1.default.config({
    path: "./.env",
});
const port = process.env.PORT || 8000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(process.env.PORT, process.env.MONGO_URI);
        yield (0, connectDB_1.connectDB)();
        app_1.app.on("error", (error) => {
            console.error(error);
            throw new Error(error);
        });
        app_1.app.listen(port, () => {
            console.log(cli_color_1.default.yellow(`Server is running on port: ${port}`));
        });
    }
    catch (error) {
        console.log("MONGODB connection failed: ", error);
        throw new Error(error);
    }
}))();
