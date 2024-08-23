export interface Transactions{
  id: string,
  name: string,
  value: number,
  type: "EXPENSE" | "INCOME",
  date: string,
  category?: {
    id: string,
    name: string,
    icon: string
  }
}
