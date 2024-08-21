import { BankAccounts } from "../../../../../app/entities/BankAccount";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

interface AccountCardProps{
  data: BankAccounts
}

export function AccountCard({ data }: AccountCardProps){
  const { color, currentBalance, name, type } = data;
  const { areValuesVisible, toggleNewAccountModalVisibility } = useDashboard();
  return (
    <div
    className="bg-white rounded-2xl p-4 border-b-4 border-violet-600 min-h-[200px] flex flex-col justify-between"
    style={{borderColor: color}}
    role="button"
    onClick={() => toggleNewAccountModalVisibility(data)}
    >
      <div>
        <BankAccountTypeIcon type={type}/>
        <h4 className="font-medium text-gray-800 tracking-[-0.5px] text-base mt-4">{name}</h4>
      </div>

      <div>
        <span className={cn(
          "font-medium text-gray-800 tracking-[-0.5px] text-base block transition-all",
          !areValuesVisible && "blur-sm"
          )}>
            {formatCurrency(currentBalance)}
        </span>
        <b className="text-gray-600 text-sm font-normal block">Saldo atual</b>
      </div>
    </div>
  )
}
