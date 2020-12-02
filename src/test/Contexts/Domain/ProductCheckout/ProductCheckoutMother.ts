import { Product } from '../../../../Contexts/Domain/Product/Product'
import { ProductCheckout } from '../../../../Contexts/Domain/ProductCheckout/ProductCheckout'
import { ProductCheckoutId } from '../../../../Contexts/Domain/ProductCheckout/ProductCheckoutId'
import { ProductCheckoutIdMother } from './ProductCheckoutIdMother'

export class ProductCheckoutMother {
    static create(id: ProductCheckoutId, products: Product[]): ProductCheckout {
        return new ProductCheckout(id, products)
    }

    static random(): ProductCheckout {
        return this.create(ProductCheckoutIdMother.random(), [])
    }
}
