import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey, HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin
} from 'sequelize';
import { Product } from '../models';
import { sequelize } from '../configs/database';

export class Cart extends Model<
    InferAttributes<Cart>, InferCreationAttributes<Cart>>{
    declare id: CreationOptional<string>;
    declare userId: ForeignKey<string>;
    declare createdAt?: Date;
    declare updatedAt?: Date;

    declare getProducts: HasManyGetAssociationsMixin<Product>
    declare addProduct : HasManyAddAssociationMixin<Product, string>
}

Cart.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
    },
    { sequelize }
);