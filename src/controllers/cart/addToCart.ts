import {HasManyAddAssociationMixinOptions } from 'sequelize';
import { NotFoundError } from '../../errors';
import { Product } from '../../models';
import { ControllerArgs } from '../../types';

export const addToCart = async ({ input, user } : ControllerArgs ) => {
    const { prodId } = input;
    let newQty = 1;
    let product: Product | undefined;
    const existProd = await Product.findByPk(prodId);
    if (!existProd) throw new NotFoundError('product not found');

    let userCart = await user!.getCart();
    if (!userCart) {
        userCart = await user!.createCart()
    }
    const products =
        await userCart.getProducts({ where: { id: prodId } });
  
    if (products.length > 0) {
        product = products[0];

        const oldQty = product.CartItem.quantity;
        console.log(oldQty);
        newQty = oldQty + 1;
    }

    userCart.addProduct(product ?? existProd,
        { through: { quantity: newQty } } as HasManyAddAssociationMixinOptions);
    
    return {
        message : 'Added to cart successfully'
    }
}