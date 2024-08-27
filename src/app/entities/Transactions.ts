export interface Transactions{
  id: string,
  name: string,
  categoryId: string,
  bankAccountId: string,
  value: number,
  type: "EXPENSE" | "INCOME",
  date: string,
  category?: {
    id: string,
    name: string,
    icon: string
  }
}
