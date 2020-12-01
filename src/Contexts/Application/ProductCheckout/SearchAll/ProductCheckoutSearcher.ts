import { ProductCheckoutRepository } from "../../../Domain/ProductCheckout/ProductCheckoutRepository"

export default class ProductCheckoutSearcher {
    constructor(private repository: ProductCheckoutRepository) {}

    async run() {
        const productCheckouts = await this.repository.searchAll()

        return productCheckouts
    }
}