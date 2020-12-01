import { Product } from "../../../Domain/Product/Product"
import { ProductRepository } from "../../../Domain/Product/ProductRepository"
import { ProductCheckout } from "../../../Domain/ProductCheckout/ProductCheckout"
import { ProductCheckoutRepository } from "../../../Domain/ProductCheckout/ProductCheckoutRepository"
import ProductFinderByCode from "../../Product/SearchAll/ProductFinderByCode"

export class ProductCheckoutScanner {
    constructor(
        private repository: ProductCheckoutRepository, 
        private productRepository: ProductRepository,
        private productCheckout: ProductCheckout
    ) {}

    async run(code: string): Promise<ProductCheckout> {
        const productFinder = new ProductFinderByCode(this.productRepository)
        const productFound = await productFinder.run(code)
        this.productCheckout.scan(productFound)
        this.repository.save(this.productCheckout)
        return this.productCheckout
    }

    async scan(sku: string): Promise<ProductCheckout> {
        return this.run(sku)
    }
}