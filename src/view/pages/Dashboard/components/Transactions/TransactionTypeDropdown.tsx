import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";

export function TransactionTypeDropdown(){
  return(
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex gap-2 items-center h-12">
      <TransactionsIcon />
      <span className="font-medium text-gray-800 tracking-[-0.5px] text-sm">Transações</span>
      <ChevronDownIcon/>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[280px]">
        <DropdownMenu.Item>
          <IncomeIcon/>
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <ExpensesIcon/>
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <TransactionsIcon/>
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
