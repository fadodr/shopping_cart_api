"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, printf, timestamp, colorize } = winston_1.format;
function logFormat() {
    return printf((info) => {
        return `${info.timestamp} ${info.level}: ${info.stack || info.message}`;
    });
}
function buildDevLogger() {
    return (0, winston_1.createLogger)({
        format: combine(colorize(), timestamp(), logFormat()),
        transports: [
            new winston_1.transports.Console()
        ]
    });
}
exports.default = buildDevLogger;
