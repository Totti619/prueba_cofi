import { ProductCheckout } from './ProductCheckout'
import { ProductCheckoutId } from './ProductCheckoutId';

export interface ProductCheckoutRepository {
    searchAll(): Promise<Array<ProductCheckout>>
    save(productCheckout: ProductCheckout): Promise<void>
    remove(productCheckout: ProductCheckout): Promise<void>
}
