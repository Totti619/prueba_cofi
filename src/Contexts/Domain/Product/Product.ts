import { AggregateRoot } from '../../Shared/Domain/AggregateRoot'
import { ProductCode } from './ProductCode'
import { ProductDiscount } from './ProductDiscount'
import { ProductId } from './ProductId'
import { ProductName } from './ProductName'
import { ProductPrice } from './ProductPrice'

export class Product extends AggregateRoot {
    readonly id: ProductId
    readonly code: ProductCode
    readonly name: ProductName
    readonly price: ProductPrice
    readonly discount: ProductDiscount = new ProductDiscount(0)

    constructor(id: ProductId, code: ProductCode, name: ProductName, price: ProductPrice, discount: ProductDiscount) {
        super()
        this.id = id
        this.code = code
        this.name = name
        this.price = price
        this.discount = discount
    }

    static fromPrimitives(data: any): Product {
        return new Product(
            new ProductId(data.id),
            new ProductCode(data.code),
            new ProductName(data.name),
            new ProductPrice(data.price),
            new ProductDiscount(data.discount)
        )
    }

    toPrimitives() {
        return {
            id: this.id.value,
            code: this.code.value,
            name: this.name.value,
            price: this.price.value,
            discount: this.discount.value,
        }
    }
}
