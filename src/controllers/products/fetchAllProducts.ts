import { Product } from '../../models';

export const fetchAllProducts = async () => {
    const products = await Product.findAll();

    return {
        message: 'products fetched successfully',
        data: products
    };
}