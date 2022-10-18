import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional, HasOneGetAssociationMixin, HasOneCreateAssociationMixin
} from 'sequelize';
import { Cart } from '../models';
import { sequelize } from '../configs';

export class User extends Model<
    InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare username: string;
    declare password: string;
    declare resetToken: CreationOptional<string | null>;
    declare resetTokenExpiresIn: CreationOptional<Date |  null>;
    declare createdAt?: CreationOptional<Date>;
    declare updatedAt?: CreationOptional<Date>;
    
    declare getCart: HasOneGetAssociationMixin<Cart>
    declare createCart : HasOneCreateAssociationMixin<Cart>
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resetToken: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        resetTokenExpiresIn: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
    },
    {
        defaultScope: {
            attributes: { exclude: ['password', 'resetToken', 'resetTokenExpiresIn'] }
        },
        scopes: {
            withPassword: {
                attributes: { exclude: ['resetToken', 'resetTokenExpiresIn'] }
            }
        },
        modelName : 'user',
        sequelize
    },
);
