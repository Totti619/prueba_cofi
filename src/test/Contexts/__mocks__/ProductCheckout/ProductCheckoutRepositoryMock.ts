import { ProductCheckout } from "../../../../Contexts/Domain/ProductCheckout/ProductCheckout"
import { ProductCheckoutRepository } from "../../../../Contexts/Domain/ProductCheckout/ProductCheckoutRepository"

export class ProductCheckoutRepositoryMock implements ProductCheckoutRepository {
    
    private mockSearchAll = jest.fn()
    private mockSave = jest.fn()
    private mockRemove = jest.fn()
    private productCheckouts: ProductCheckout[] = []

    returnOnSearchAll(productCheckouts: ProductCheckout[]) {
        this.productCheckouts = productCheckouts
    }

    assertSearchAll() {
        expect(this.mockSearchAll).toHaveBeenCalled()
    }

    assertSaveHasBeenCalledWith(productCheckout: ProductCheckout) {
        expect(this.mockSave).toHaveBeenCalledWith(productCheckout)
    }

    assertRemoveHasBeenCalledWith(productCheckout: ProductCheckout) {
        expect(this.mockRemove).toHaveBeenCalledWith(productCheckout)
    }

    async searchAll(): Promise<ProductCheckout[]> {
        this.mockSearchAll()
        return this.productCheckouts
    }
    async save(productCheckout: ProductCheckout): Promise<void> {
        this.mockSave(productCheckout)
    }
    async remove(productCheckout: ProductCheckout): Promise<void> {
        this.mockRemove(productCheckout)
    }

}