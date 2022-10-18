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
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const utils_1 = require("../utils");
const configs_1 = require("../configs");
const errors_1 = require("../errors");
const models_1 = require("../models");
const currentUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenHeader = req.get('Authorization');
    if (!tokenHeader) {
        req.user = null;
        return next();
    }
    const token = tokenHeader.split(' ')[1];
    let tokenDetails;
    try {
        tokenDetails =
            (0, utils_1.verifyToken)(token, configs_1.config.jwtAccessTokenSecret);
    }
    catch (err) {
        req.user = null;
        const error = new errors_1.ForbiddenError(err.message);
        return next(error);
    }
    const user = yield models_1.User.scope('withPassword').findByPk(tokenDetails.id);
    if (!user)
        throw new errors_1.NotFoundError('user not found');
    req.user = user;
    next();
});
exports.currentUser = currentUser;
