import { Product } from "../../Domain/Product/Product";
import { ProductId } from "../../Domain/Product/ProductId";
import { ProductRepository } from "../../Domain/Product/ProductRepository";
import { JsonFileRepository } from "../../Shared/Infrastructure/Persistence/JsonFile/JsonFileRepository";

export class JsonFileProductRepository
    extends JsonFileRepository<Product>
    implements ProductRepository {

    protected filePath(): string {
        return './src/docs/products.json'
    }
        
    async searchAll(): Promise<Product[]> {
        const data = this.data()
        const products: Product[] = Object.values(data).map(item => Product.fromPrimitives(item))
        return products
    }
    async save(product: Product): Promise<void> {
        this.persist(product.id.value, product)
    }
    async remove(product: Product): Promise<void> {
        this.delete(product.id.value)
    }
}