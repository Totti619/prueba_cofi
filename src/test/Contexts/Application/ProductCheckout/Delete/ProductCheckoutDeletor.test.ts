import ProductCheckoutDeletor from "../../../../../Contexts/Application/ProductCheckout/Delete/ProductCheckoutDeletor"
import { ProductCheckoutMother } from "../../../Domain/ProductCheckout/ProductCheckoutMother"
import { ProductCheckoutRepositoryMock } from "../../../__mocks__/ProductCheckout/ProductCheckoutRepositoryMock"

describe('ProductCheckoutDeletor', () => {
    it('deletes a product checkout', async () => {
        const productCheckout = ProductCheckoutMother.random()
        const repository = new ProductCheckoutRepositoryMock()
        const useCase = new ProductCheckoutDeletor(repository)

        await useCase.run(productCheckout)

        repository.assertRemoveHasBeenCalledWith(productCheckout)
    })
})