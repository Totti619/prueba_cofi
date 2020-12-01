import { ProductCheckout } from "../../../Domain/ProductCheckout/ProductCheckout"
import { ProductCheckoutRepository } from "../../../Domain/ProductCheckout/ProductCheckoutRepository"

export class ProductCheckoutUpdater {
    constructor(private repository: ProductCheckoutRepository) {}

    async run(productCheckout: ProductCheckout, data: any): Promise<ProductCheckout> {
        const updatedProductCheckout: ProductCheckout = ProductCheckout.fromPrimitives({
            ...productCheckout.toPrimitives(),
            ...data
        })
        await this.repository.save(updatedProductCheckout)
        return updatedProductCheckout
    }
}
