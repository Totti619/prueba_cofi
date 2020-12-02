import { Product } from "../../../../Contexts/Domain/Product/Product";
import { ProductRepository } from "../../../../Contexts/Domain/Product/ProductRepository";

export class ProductRepositoryMock implements ProductRepository {
    
    private mockSearchAll = jest.fn()
    private mockSave = jest.fn()
    private mockRemove = jest.fn()
    private products: Product[] = []

    returnOnSearchAll(products: Product[]) {
        this.products = products
    }

    assertSearchAll() {
        expect(this.mockSearchAll).toHaveBeenCalled()
    }

    assertSaveHasBeenCalledWith(product: Product) {
        expect(this.mockSave).toHaveBeenCalledWith(product)
    }

    assertRemoveHasBeenCalledWith(product: Product) {
        expect(this.mockRemove).toHaveBeenCalledWith(product)
    }

    async searchAll(): Promise<Product[]> {
        this.mockSearchAll()
        return this.products
    }
    async save(product: Product): Promise<void> {
        this.mockSave(product)
    }
    async remove(product: Product): Promise<void> {
        this.mockRemove(product)
    }

}