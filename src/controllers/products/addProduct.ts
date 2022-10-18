import { DuplicateError } from '../../errors';
import { Product } from '../../models/product';
import { ControllerArgs } from '../../types';

export const addProduct = async ({ input }: ControllerArgs) => {
    const { title, description, price } = input;

    const product = await Product.findOne({ where: { title } });
    if (product) throw new DuplicateError('product already exist');

    const newProduct = await Product.create({
        title,
        description,
        price
    });

    return {
        code: 201,
        message: 'product added succesfully',
        data: newProduct
    };
}