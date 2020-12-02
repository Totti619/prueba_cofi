import ProductSearcher from "../../../../../Contexts/Application/Product/SearchAll/ProductSearcher"
import { ProductMother } from "../../../Domain/Product/ProductMother"
import { ProductRepositoryMock } from "../../../__mocks__/Product/ProductRepositoryMock"

describe('ProductSearcher', () => {
    it('searches products', async () => {
        const repository = new ProductRepositoryMock()
        const useCase = new ProductSearcher(repository)

        await useCase.run()

        repository.assertSearchAll()
    })
})