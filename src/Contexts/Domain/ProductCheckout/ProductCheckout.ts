import { AggregateRoot } from '../../Shared/Domain/AggregateRoot'
import { Product } from '../Product/Product'
import { ProductCheckoutId } from './ProductCheckoutId'
import { Checkout } from './Interfaces/Checkout'

export class ProductCheckout extends AggregateRoot implements Checkout {
    readonly id: ProductCheckoutId
    readonly productsScanned: Product[]

    constructor(id: ProductCheckoutId, productsScanned: Product[] = []) {
        super()
        this.id = id
        this.productsScanned = productsScanned
    }

    scan(product: Product): void {
        this.productsScanned.push(product)
    }

    total(): number {
        if (this.productsScanned.length === 0) return 0
        const discountFrom = process.env.DISCOUNT_FROM || 3
        const productsByQuantity: Record<string, number> = {}
        this.productsScanned.forEach(product =>  {
            productsByQuantity[product.code.value]
                ? productsByQuantity[product.code.value]++
                : productsByQuantity[product.code.value] = 1
        })
        const prices = this.productsScanned.map(
            product => productsByQuantity[product.code.value] >= discountFrom 
                ? product.price.value - product.discount.value
                : product.price.value
        )
        const total = prices.reduce((acc, cur) => acc + cur)
        return total
    }

    static fromPrimitives(data: any): ProductCheckout {
        return new ProductCheckout(
            new ProductCheckoutId(data.id),
            data.products.map((product: any) => Product.fromPrimitives(product))
        )
    }

    toPrimitives() {
        return {
            id: this.id.value,
            products: this.productsScanned.map((productScanned) => productScanned.toPrimitives())
        }
    }
}
