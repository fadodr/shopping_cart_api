"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = Object.freeze({
    port: process.env.PORT,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PWD,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_SECRET,
    accessTokenExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN
});
