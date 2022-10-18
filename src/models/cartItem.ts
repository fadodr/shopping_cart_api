import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey
} from 'sequelize';
import { sequelize } from '../configs/database';

export class CartItem extends Model<
    InferAttributes<CartItem>, InferCreationAttributes<CartItem>>{
    declare id: CreationOptional<string>;
    declare cartId: ForeignKey<string>;
    declare productId : ForeignKey<string>
    declare quantity: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

CartItem.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        quantity: DataTypes.INTEGER
    },
    {
        sequelize
    }
);