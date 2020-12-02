import { Product } from "../../../../Contexts/Domain/Product/Product";
import { Checkout } from "../../../../Contexts/Domain/ProductCheckout/Interfaces/Checkout";

export default class CheckoutMock implements Checkout {
    private mockScan = jest.fn()
    private mockTotal = jest.fn()

    assertScanToBeCalledWith(product: Product) {
        expect(this.mockScan).toBeCalledWith(product)
    }
    assertTotalToBeCalled() {
        expect(this.mockTotal).toBeCalled()
    }

    scan(product: Product): void {
        this.mockScan(product)
    }
    total(): number {
        return this.mockTotal()
    }
}