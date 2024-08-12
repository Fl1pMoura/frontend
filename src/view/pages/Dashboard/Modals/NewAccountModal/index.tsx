import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModal } from "./useNewAccountModal";

export function NewAccountModal(){
  const { isNewAccountModalVisible, toggleNewAccountModalVisility } = useNewAccountModal();

  return(
    <Modal open={isNewAccountModalVisible} title="Nova Conta" onClose={toggleNewAccountModalVisility}>
      <form>
        <div>
          <span className="text-xs text-gray-600">Saldo</span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600 tracking-[-0.5px]">R$</span>
            <InputCurrency/>
          </div>
        </div>

        <div className="space-y-4 mt-10">
          <Input name="name" type="text" placeholder="Nome da conta"/>
          <Select placeholder="Tipo" options={[
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
            <ColorsDropdownInput/>
        </div>
      </form>
    </Modal>
  )
}
