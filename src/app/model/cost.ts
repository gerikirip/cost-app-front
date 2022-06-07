import { Mode } from "./mode"
import { Category } from "./category"

export interface Cost {
  id?: number
  name: string
  category: Category
  amount: number
  quantity: number
  totalAmount?: number
  date: Date
  mode: Mode
}
