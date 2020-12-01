import { ProductCheckout } from "../../../Domain/ProductCheckout/ProductCheckout";

export default class ProductCheckoutFormatter {
    run(productCheckout: ProductCheckout): any {
        return {
            ...productCheckout.toPrimitives(),
            total: productCheckout.total(),
        }
    }
}