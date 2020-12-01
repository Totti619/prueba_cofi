import { Product } from '../../../Domain/Product/Product'
import { ProductRepository } from '../../../Domain/Product/ProductRepository'

export default class ProductFinderByCode {
    constructor(private repository: ProductRepository) {}

    async run(code: string): Promise<Product> {
        const products = await this.repository.searchAll()
        const product = products.find((product) => code === product.code.value)
        if (product === undefined) throw 'Product not found'
        return product
    }
}
