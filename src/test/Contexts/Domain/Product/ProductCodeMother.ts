import { ProductCode } from "../../../../Contexts/Domain/Product/ProductCode";
import { WordMother } from "../../Shared/Domain/WordMother";

export class ProductCodeMother {
    static create(value: string): ProductCode {
      return new ProductCode(value);
    }
  
    static random(): ProductCode {
      return this.create(WordMother.random());
    }
  }