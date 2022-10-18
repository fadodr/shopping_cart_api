import { NotFoundError } from '../../errors';
import { Product } from '../../models';
import { ControllerArgs } from '../../types';

export const updateProduct = async ({ params, input }: ControllerArgs) => {
    const { prodId } = params;
    const { title, description, price } = input;

    const product = await Product.findOne({ where: { id: prodId } });
    if (!product) throw new NotFoundError('product not found');

    product.set({
        title,
        description,
        price
    });

    await product.save();

    return {
        message: 'product updated successfully',
        data: product
    };
}