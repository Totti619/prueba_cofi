import { Product } from './Product'
import { ProductId } from './ProductId';

export interface ProductRepository {
    searchAll(): Promise<Array<Product>>
    save(product: Product): Promise<void>
    remove(product: Product): Promise<void>
}
