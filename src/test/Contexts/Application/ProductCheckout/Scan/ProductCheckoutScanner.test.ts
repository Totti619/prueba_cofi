import { ProductMother } from "../../../Domain/Product/ProductMother"
import { ProductCheckoutMother } from "../../../Domain/ProductCheckout/ProductCheckoutMother"
import CheckoutMock from "../../../__mocks__/ProductCheckout/CheckoutMock"

describe('ProductCheckoutScanner', () => {
    it('scans a product to a product checkout', async () => {
        const productCheckout = ProductCheckoutMother.random()
        const checkoutMock = new CheckoutMock()
        const product = ProductMother.random()

        productCheckout.scan(product)
        productCheckout.total()

        expect(productCheckout.productsScanned.length).toBeGreaterThan(0)
        expect(productCheckout.total()).toBeGreaterThan(0)
        
    })
})