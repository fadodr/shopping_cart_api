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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerHandler = void 0;
const utils_1 = require("../utils");
function parseControllerArgs(req) {
    return {
        input: req.body,
        params: req.params,
        query: req.query,
        user: req.user,
        headers: req.headers,
    };
}
const controllerHandler = (controllerFn, schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const controllerArgs = parseControllerArgs(req);
        const { input, params, query } = controllerArgs;
        try {
            if (schema) {
                const { querySchema, paramsSchema, inputSchema } = schema;
                try {
                    if (inputSchema)
                        (0, utils_1.joiValidate)(inputSchema, input);
                    if (querySchema)
                        (0, utils_1.joiValidate)(querySchema, query);
                    if (paramsSchema)
                        (0, utils_1.joiValidate)(paramsSchema, params);
                }
                catch (error) {
                }
            }
            const controllerResult = yield controllerFn(controllerArgs);
            if (!controllerResult) {
                res.status(200).send({ status: true });
                return;
            }
            ;
            const { code } = controllerResult, data = __rest(controllerResult, ["code"]);
            res.status(code !== null && code !== void 0 ? code : 200).send(data);
        }
        catch (error) {
            next(error);
        }
    });
};
exports.controllerHandler = controllerHandler;
