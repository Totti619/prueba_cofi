import { Product } from "../../../Domain/Product/Product"
import { ProductCheckout } from "../../../Domain/ProductCheckout/ProductCheckout"
import { ProductCheckoutId } from "../../../Domain/ProductCheckout/ProductCheckoutId"
import { ProductCheckoutRepository } from "../../../Domain/ProductCheckout/ProductCheckoutRepository"

export class ProductCheckoutCreator {
    constructor(private repository: ProductCheckoutRepository) {}

    async run(id: string, productsScanned: Product[] = []): Promise<ProductCheckout> {
        const productCheckout = new ProductCheckout(
            new ProductCheckoutId(id),
            productsScanned
        )
        await this.repository.save(productCheckout)
        return productCheckout
    }
}
