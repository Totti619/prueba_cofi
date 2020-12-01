import { ProductCheckout } from "../../../Domain/ProductCheckout/ProductCheckout";
import { ProductCheckoutRepository } from "../../../Domain/ProductCheckout/ProductCheckoutRepository";

export default class ProductCheckoutDeletor {
    constructor(private repository: ProductCheckoutRepository) {}

    async run(productCheckout: ProductCheckout): Promise<void> {
        this.repository.remove(productCheckout)
    }
}