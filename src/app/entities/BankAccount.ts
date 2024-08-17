export interface BankAccounts {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  currentBalance: number;
}
