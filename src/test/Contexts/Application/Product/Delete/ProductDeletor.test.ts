import ProductDeletor from "../../../../../Contexts/Application/Product/Delete/ProductDeletor"
import { ProductMother } from "../../../Domain/Product/ProductMother"
import { ProductRepositoryMock } from "../../../__mocks__/Product/ProductRepositoryMock"

describe('ProductDeletor', () => {
    it('deletes a product', async () => {
        const product = ProductMother.random()
        const repository = new ProductRepositoryMock()
        const useCase = new ProductDeletor(repository)

        await useCase.run(product)

        repository.assertRemoveHasBeenCalledWith(product)
    })
})