import { ProductId } from '../../../../Contexts/Domain/Product/ProductId'
import { UuidMother } from '../../Shared/Domain/UuidMother'

export class ProductIdMother {
    static create(value: string): ProductId {
        return new ProductId(value)
    }

    static random(): ProductId {
        return this.create(UuidMother.random())
    }
}
