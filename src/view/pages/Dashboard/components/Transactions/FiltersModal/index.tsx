import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../../../../../app/utils/cn";
import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { useFiltersModalController } from "./useFiltersModalController";

interface FiltersModalProps{
  isModalVisible: boolean,
  handleModalVisibility(): void,
  onApplyFilters(filters: {bankAccountId: string | undefined , year: number}): void
}

export function FiltersModal({ isModalVisible, handleModalVisibility, onApplyFilters}: FiltersModalProps){
  const { handleSelectedBankAccount, selectedBankAccountId, handleSelectedYear, selectedYear, accounts } = useFiltersModalController();
  return(
    <Modal open={ isModalVisible } onClose={ handleModalVisibility } title="Filtros" >
      <div className="text-gray-800">
        <span className='text-lg font-bold tracking-[-1px]'>Contas</span>
        <div className="space-y-2 mt-2">
          {accounts.map(account => (
            <button
            key={account.id}
            onClick={() => handleSelectedBankAccount(account.id)}
            className={cn(
              "w-full rounded-2xl h-10 text-left tracking-[-0.5px] flex items-center hover:bg-gray-50 p-2 transition-all",
              account.id === selectedBankAccountId && "!bg-gray-200"
            )}
            >
              { account.name }
            </button>
          ))}
        </div>
      </div>

      <div className="text-gray-800 my-10">
        <span className='text-lg font-bold tracking-[-1px]'>Ano</span>
        <div className="mt-2 flex items-center justify-between max-w-[210px]">
          <button
            onClick={() => handleSelectedYear(-1)}
            className="size-12 flex items-center justify-center">
            <ChevronLeftIcon className="size-6"/>
          </button>
          <div className="flex-1 text-center">
            <span className="font-medium text-sm tracking-[-0.5px]">{selectedYear}</span>
          </div>
          <button
            onClick={() => handleSelectedYear(1)}
            className="size-12 flex items-center justify-center">
            <ChevronRightIcon className="size-6"/>
          </button>
        </div>
      </div>

      <Button className="w-full min-h-14" onClick={() => onApplyFilters({bankAccountId: selectedBankAccountId, year: selectedYear})}>Aplicar Filtros</Button>
    </Modal>
  )
}
