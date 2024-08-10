
import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";
import { Expense } from "../../../../components/icons/categories/expense/Expense";
import { Income } from "../../../../components/icons/categories/income/Income";
import { useDashboard } from "../DashboardContext/useDashboard";

export function Fab(){
  const { toggleNewAccountModalVisility } = useDashboard();
  return(
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="fixed bottom-4 right-4 size-12 rounded-full bg-teal-900 text-white flex items-center justify-center">
        <PlusIcon className="size-6"/>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content sideOffset={4}>
        <DropdownMenu.Item>
          <Income/>
          Nova Despesa
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Expense/>
          Nova Receita
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={toggleNewAccountModalVisility}>
          <BankAccountIcon/>
          Nova Conta
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
