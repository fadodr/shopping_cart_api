"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const configObj_1 = require("./configObj");
exports.sequelize = new sequelize_1.Sequelize(configObj_1.config.dbName, configObj_1.config.dbUsername, configObj_1.config.dbPassword, { dialect: 'mysql' });
