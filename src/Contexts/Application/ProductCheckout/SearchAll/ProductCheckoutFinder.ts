import { ProductCheckout } from "../../../Domain/ProductCheckout/ProductCheckout"
import { ProductCheckoutRepository } from "../../../Domain/ProductCheckout/ProductCheckoutRepository"

export default class ProductCheckoutFinder {
    constructor(private repository: ProductCheckoutRepository) {}

    async run(id: string): Promise<ProductCheckout> {
        const productCheckouts = await this.repository.searchAll()
        const productCheckout = productCheckouts.find((productCheckout) => id === productCheckout.id.value)
        if (productCheckout === undefined) throw 'ProductCheckout not found'
        return productCheckout
    }
}
