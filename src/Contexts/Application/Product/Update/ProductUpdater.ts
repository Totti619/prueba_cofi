import { Product } from '../../../Domain/Product/Product'
import { ProductCode } from '../../../Domain/Product/ProductCode'
import { ProductId } from '../../../Domain/Product/ProductId'
import { ProductName } from '../../../Domain/Product/ProductName'
import { ProductPrice } from '../../../Domain/Product/ProductPrice'
import { ProductRepository } from '../../../Domain/Product/ProductRepository'

export class ProductUpdater {
    constructor(private repository: ProductRepository) {}

    async run(product: Product, data: any): Promise<Product> {
        const updatedProduct: Product = Product.fromPrimitives({
            ...product.toPrimitives(),
            ...data
        })
        await this.repository.save(updatedProduct)
        return updatedProduct
    }
}
