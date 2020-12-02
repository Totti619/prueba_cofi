import ProductCheckoutSearcher from "../../../../../Contexts/Application/ProductCheckout/SearchAll/ProductCheckoutSearcher"
import { ProductCheckoutRepositoryMock } from "../../../__mocks__/ProductCheckout/ProductCheckoutRepositoryMock"

describe('ProductCheckoutSearcher', () => {
    it('searches product checkouts', async () => {
        const repository = new ProductCheckoutRepositoryMock()
        const useCase = new ProductCheckoutSearcher(repository)

        await useCase.run()

        repository.assertSearchAll()
    })
})