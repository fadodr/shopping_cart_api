import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
} from 'sequelize';
import { CartItem } from '../models';
import { sequelize } from '../configs';

export class Product extends Model<
    InferAttributes<Product>, InferCreationAttributes<Product>>{
    declare id: CreationOptional<string>;
    declare title: string;
    declare description: string;
    declare price: number;

   declare CartItem: NonAttribute<CartItem>;

    declare createdAt?: CreationOptional<Date>;
    declare updatedAt? : CreationOptional<Date>;
}

Product.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: DataTypes.STRING,
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    }, { sequelize }
);