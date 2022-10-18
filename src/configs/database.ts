import { Sequelize } from 'sequelize';
import { config } from './configObj';
import path from 'path';
import fs from 'fs';

export const sequelize = new Sequelize(
    config.dbName,
    config.dbUsername,
    config.dbPassword,
    { dialect: 'mysql' }
);