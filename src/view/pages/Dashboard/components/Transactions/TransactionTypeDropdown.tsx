import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";

interface TransactionTypeDropdownProps {
  onSelect(type: "INCOME" | "EXPENSE" | undefined): void
  selectedType: "INCOME" | "EXPENSE" | undefined
}

export function TransactionTypeDropdown({ onSelect, selectedType }: TransactionTypeDropdownProps){
  return(
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex gap-2 items-center h-12">
            {selectedType === "EXPENSE" ? <ExpensesIcon /> : selectedType === "INCOME" ? <IncomeIcon /> : <TransactionsIcon />}
            <span className="font-medium text-gray-800 tracking-[-0.5px] text-sm">{selectedType === "EXPENSE" ? "Despesa" : selectedType === "INCOME" ? "Receita" : "Transações"}</span>
      <ChevronDownIcon/>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[280px]">
        <DropdownMenu.Item onSelect={() => onSelect("INCOME")}>
          <IncomeIcon/>
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => onSelect("EXPENSE")}>
          <ExpensesIcon/>
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => onSelect(undefined)}>
          <TransactionsIcon/>
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
