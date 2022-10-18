import express from 'express';
const app = express();

import { config, sequelize } from './configs';
import logger from './logger';
import router from './routes/index';
import { User, Cart, Product, CartItem } from './models';
import { errroHandler,currentUser  } from './middlewares';

const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(currentUser);
app.use('/', router);
app.use(errroHandler);

User.hasOne(Cart, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: 'CASCADE'
});
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize.sync().then(() => {
    app.listen(port, () => {
        logger.info(`listening on port ${port}`);
    });
}).catch((error) => {
    logger.error(error);
});