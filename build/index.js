"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_color_1 = __importDefault(require("cli-color"));
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
const app_1 = require("./app");
const connectDB_1 = require("./database/connectDB");
dotenv.config({
    path: path_1.default.resolve(__dirname, './.env'),
});
const port = process.env.PORT || 8000;
(async () => {
    try {
        await (0, connectDB_1.connectDB)();
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
})();
