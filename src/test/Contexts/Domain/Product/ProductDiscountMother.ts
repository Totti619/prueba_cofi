import { ProductDiscount } from "../../../../Contexts/Domain/Product/ProductDiscount";
import { NumberMother } from "../../Shared/Domain/NumberMother";

export class ProductDiscountMother {
    static create(value: number): ProductDiscount {
      return new ProductDiscount(value);
    }
  
    static random(): ProductDiscount {
      return this.create(NumberMother.random());
    }
  }