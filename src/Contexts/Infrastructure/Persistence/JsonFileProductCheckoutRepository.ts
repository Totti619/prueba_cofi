import { ProductCheckout } from "../../Domain/ProductCheckout/ProductCheckout"
import { ProductCheckoutRepository } from "../../Domain/ProductCheckout/ProductCheckoutRepository"
import { JsonFileRepository } from "../../Shared/Infrastructure/Persistence/JsonFile/JsonFileRepository"

export class JsonFileProductCheckoutRepository
    extends JsonFileRepository<ProductCheckout>
    implements ProductCheckoutRepository {

    protected filePath(): string {
        return './src/docs/productCheckouts.json'
    }
        
    async searchAll(): Promise<ProductCheckout[]> {
        const data = this.data()
        const productCheckouts: ProductCheckout[] = Object.values(data).map(item => ProductCheckout.fromPrimitives(item))
        return productCheckouts
    }
    async save(productCheckout: ProductCheckout): Promise<void> {
        this.persist(productCheckout.id.value, productCheckout)
    }
    async remove(productCheckout: ProductCheckout): Promise<void> {
        this.delete(productCheckout.id.value)
    }
}