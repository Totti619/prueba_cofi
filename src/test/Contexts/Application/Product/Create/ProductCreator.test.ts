import { ProductCreator } from "../../../../../Contexts/Application/Product/Create/ProductCreator"
import { ProductMother } from "../../../Domain/Product/ProductMother"
import { ProductRepositoryMock } from "../../../__mocks__/Product/ProductRepositoryMock"

describe('ProductCreator', () => {
    it('creates and persists a product', async () => {
        const product = ProductMother.random()
        const repository = new ProductRepositoryMock()
        const useCase = new ProductCreator(repository)

        await useCase.run(
            product.id.value,
            product.code.value,
            product.name.value,
            product.price.value,
            product.discount.value
        )

        repository.assertSaveHasBeenCalledWith(product)
    })
})