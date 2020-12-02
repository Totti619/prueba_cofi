import { ProductCheckoutCreator } from '../../../../../Contexts/Application/ProductCheckout/Create/ProductCheckoutCreator'
import { ProductCheckoutMother } from '../../../Domain/ProductCheckout/ProductCheckoutMother'
import { ProductCheckoutRepositoryMock } from '../../../__mocks__/ProductCheckout/ProductCheckoutRepositoryMock'

describe('ProductCheckoutCreator', () => {
    it('creates and persists a product checkout', async () => {
        const productCheckout = ProductCheckoutMother.random()
        const repository = new ProductCheckoutRepositoryMock()
        const useCase = new ProductCheckoutCreator(repository)

        await useCase.run(productCheckout.id.value)

        repository.assertSaveHasBeenCalledWith(productCheckout)
    })
})
