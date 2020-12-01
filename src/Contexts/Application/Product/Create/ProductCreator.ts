import { Product } from '../../../Domain/Product/Product'
import { ProductCode } from '../../../Domain/Product/ProductCode'
import { ProductId } from '../../../Domain/Product/ProductId'
import { ProductName } from '../../../Domain/Product/ProductName'
import { ProductPrice } from '../../../Domain/Product/ProductPrice'
import { ProductRepository } from '../../../Domain/Product/ProductRepository'

export class ProductCreator {
    constructor(private repository: ProductRepository) {}

    async run(id: string, code: string, name: string, price: number): Promise<Product> {
        const product = new Product(
            new ProductId(id),
            new ProductCode(code),
            new ProductName(name),
            new ProductPrice(price)
        )
        await this.repository.save(product)
        return product
    }
}
