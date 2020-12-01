import { Product } from "../../../Domain/Product/Product";
import { ProductRepository } from "../../../Domain/Product/ProductRepository";

export default class ProductSearcher {
    constructor(private repository: ProductRepository) {}

    async run() {
        const products = await this.repository.searchAll()

        return products
    }
}