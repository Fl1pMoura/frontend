import { DatePickerInput } from "../../../../components/datePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModal } from "./useNewTransactionModal";

export function NewTransactionModal(){
  const { isTransactionModalVisible, toggleTransactionModalVisility, newTransactionType } = useNewTransactionModal();
  const isExpense = newTransactionType === "EXPENSE";

  return(
    <Modal open={isTransactionModalVisible} title={isExpense ? "Nova Despesa": "Nova Receita"} onClose={toggleTransactionModalVisility}>
      <form>
        <div>
          <span className="text-xs text-gray-600">Valor {isExpense ? "da Despesa" : "da Receita"}</span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600 tracking-[-0.5px]">R$</span>
            <InputCurrency/>
          </div>
        </div>

        <div className="space-y-4 mt-10">
          <Input name="name" type="text" placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"}/>
          <Select placeholder="Categoria" options={[
            {
              label: "Investimentos",
              value: "INVESTMENT"
            },
            {
              label: "Dinheiro Físico",
              value: "CASH"
            },
            {
              label: "Conta Corrente",
              value: "CHECKING"
            },
            ]}/>

          <Select placeholder={isExpense ? "Pagar com" : "Receber na conta"} options={[
            {
              label: "Investimentos",
              value: "INVESTMENT"
            },
            {
              label: "Dinheiro Físico",
              value: "CASH"
            },
            {
              label: "Conta Corrente",
              value: "CHECKING"
            },
            ]}/>

            <DatePickerInput />


        </div>
      </form>
    </Modal>
  )
}
