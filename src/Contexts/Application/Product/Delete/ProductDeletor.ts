import { Product } from "../../../Domain/Product/Product";
import { ProductRepository } from "../../../Domain/Product/ProductRepository";

export default class ProductDeletor {
    constructor(private repository: ProductRepository) {}

    async run(product: Product): Promise<void> {
        this.repository.remove(product)
    }
}