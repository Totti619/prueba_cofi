import { Product } from "../../Product/Product";

export interface Checkout {
	scan: (product: Product) => void
	total: () => number
}