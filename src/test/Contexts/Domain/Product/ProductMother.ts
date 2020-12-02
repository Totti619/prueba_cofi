import { Product } from "../../../../Contexts/Domain/Product/Product";
import { ProductCode } from "../../../../Contexts/Domain/Product/ProductCode";
import { ProductDiscount } from "../../../../Contexts/Domain/Product/ProductDiscount";
import { ProductId } from "../../../../Contexts/Domain/Product/ProductId";
import { ProductName } from "../../../../Contexts/Domain/Product/ProductName";
import { ProductPrice } from "../../../../Contexts/Domain/Product/ProductPrice";
import { ProductCodeMother } from "./ProductCodeMother";
import { ProductDiscountMother } from "./ProductDiscountMother";
import { ProductIdMother } from "./ProductIdMother";
import { ProductNameMother } from "./ProductNameMother";
import { ProductPriceMother } from "./ProductPriceMother";

export class ProductMother {
    static create(
        id: ProductId,
        code: ProductCode,
        name: ProductName,
        price: ProductPrice,
        discount: ProductDiscount
    ): Product {
        return new Product(id, code, name, price, discount)
    }

    static random(): Product {
        return this.create(
            ProductIdMother.random(),
            ProductCodeMother.random(),
            ProductNameMother.random(),
            ProductPriceMother.random(),
            ProductDiscountMother.random()
        )
    }
}