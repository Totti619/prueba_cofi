import { ProductPrice } from "../../../../Contexts/Domain/Product/ProductPrice";
import { NumberMother } from "../../Shared/Domain/NumberMother";

export class ProductPriceMother {
    static create(value: number): ProductPrice {
      return new ProductPrice(value);
    }
  
    static random(): ProductPrice {
      return this.create(NumberMother.random());
    }
  }