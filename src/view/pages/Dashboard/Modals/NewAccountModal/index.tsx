import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModal } from "./useNewAccountModal";

export function NewAccountModal(){
  const { isNewAccountModalVisible, toggleNewAccountModalVisibility, errors, handleSubmit, register, control, isPending, isEditing } = useNewAccountModal();

  return(
    <Modal open={isNewAccountModalVisible} title={!isEditing?"Nova Conta":"Editar Conta" }onClose={toggleNewAccountModalVisibility}>
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs text-gray-600">Saldo inicial</span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600 tracking-[-0.5px]">R$</span>
            <Controller
            name="initialBalance"
            defaultValue="0"
            control={control}
            render = {({field: {onChange, value}}) => (
              <InputCurrency value={value} onChange={onChange} error={ errors.initialBalance?.message } />
              )}
            />
          </div>
        </div>

        <div className="space-y-4 mt-10">
          <Input
           type="text"
           {...register('name')}
           error={ errors.name?.message }
           placeholder="Nome da conta"/>

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({field: { value, onChange }}) => (
                <Select value={value} onChange={onChange} error={errors.type?.message} placeholder="Tipo" options={[
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
                )}
          />
                    <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({field: { value, onChange }}) => (
              <ColorsDropdownInput value={value} onChange={onChange} error={errors.color?.message}/>
            )}
          />

        </div>
        <Button isLoading={isPending} disabled={false} className="w-full h-14 mt-6">
              Salvar
        </Button>
      </form>
    </Modal>
  )
}
