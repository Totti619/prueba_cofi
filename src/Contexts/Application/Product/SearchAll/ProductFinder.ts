import { Product } from '../../../Domain/Product/Product'
import { ProductRepository } from '../../../Domain/Product/ProductRepository'

export default class ProductFinder {
    constructor(private repository: ProductRepository) {}

    async run(id: string): Promise<Product> {
        const products = await this.repository.searchAll()
        const product = products.find((product) => id === product.id.value)
        if (product === undefined) throw 'Product not found'
        return product
    }
}
