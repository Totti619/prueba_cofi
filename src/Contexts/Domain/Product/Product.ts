import { AggregateRoot } from '../../Shared/Domain/AggregateRoot'
import { ProductCode } from './ProductCode'
import { ProductId } from './ProductId'
import { ProductName } from './ProductName'
import { ProductPrice } from './ProductPrice'

export class Product extends AggregateRoot {
    readonly id: ProductId
    readonly code: ProductCode
    readonly name: ProductName
    readonly price: ProductPrice

    constructor(id: ProductId, code: ProductCode, name: ProductName, price: ProductPrice) {
        super()
        this.id = id
        this.code = code
        this.name = name
        this.price = price
    }

    static fromPrimitives(data: any): Product {
        return new Product(
            new ProductId(data.id),
            new ProductCode(data.code),
            new ProductName(data.name),
            new ProductPrice(data.price)
        )
    }

    toPrimitives() {
        return {
            id: this.id.value,
            code: this.code.value,
            name: this.name.value,
            price: this.price.value,
        }
    }
}
