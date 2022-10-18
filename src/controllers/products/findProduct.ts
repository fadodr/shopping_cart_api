import { NotFoundError } from '../../errors';
import { Product } from '../../models';
import { ControllerArgs } from '../../types';

export const findProduct = async ({ params }: ControllerArgs) => {
    const { prodId } = params;

    const product = await Product.findOne({ where: { id: prodId } });
    if (!product) throw new NotFoundError('product not found');

    return {
        message: 'product retrieved successfully',
        data: product
    };
}