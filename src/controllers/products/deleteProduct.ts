import { NotFoundError } from '../../errors';
import { Product } from '../../models';
import { ControllerArgs } from '../../types';

export const deleteProduct = async ({ params }: ControllerArgs) => {
    const { prodId } = params;

    const product = await Product.findOne({ where: { id: prodId } });
    if (!product) throw new NotFoundError('product not found');

    await product.destroy();

    return;
}