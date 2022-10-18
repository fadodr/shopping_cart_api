"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const configs_1 = require("./configs");
const logger_1 = __importDefault(require("./logger"));
const index_1 = __importDefault(require("./routes/index"));
const models_1 = require("./models");
const middlewares_1 = require("./middlewares");
const port = configs_1.config.port;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(middlewares_1.currentUser);
app.use('/', index_1.default);
app.use(middlewares_1.errroHandler);
models_1.User.hasOne(models_1.Cart, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: 'CASCADE'
});
models_1.Cart.belongsTo(models_1.User);
models_1.Cart.belongsToMany(models_1.Product, { through: models_1.CartItem });
models_1.Product.belongsToMany(models_1.Cart, { through: models_1.CartItem });
configs_1.sequelize.sync().then(() => {
    app.listen(port, () => {
        logger_1.default.info(`listening on port ${port}`);
    });
}).catch((error) => {
    logger_1.default.error(error);
});
