import { ProductCheckoutId } from '../../../../Contexts/Domain/ProductCheckout/ProductCheckoutId'
import { UuidMother } from '../../Shared/Domain/UuidMother'

export class ProductCheckoutIdMother {
    static create(value: string): ProductCheckoutId {
        return new ProductCheckoutId(value)
    }

    static random(): ProductCheckoutId {
        return this.create(UuidMother.random())
    }
}
