import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/datePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModal } from "./useNewTransactionModal";

export function NewTransactionModal(){
  const { isTransactionModalVisible, toggleTransactionModalVisility, newTransactionType, control, errors, handleSubmit, register, accounts, categories, isLoadingTransactions } = useNewTransactionModal();
  const isExpense = newTransactionType === "EXPENSE";

  return(
    <Modal open={isTransactionModalVisible} title={isExpense ? "Nova Despesa": "Nova Receita"} onClose={toggleTransactionModalVisility}>
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs text-gray-600">Valor {isExpense ? "da Despesa" : "da Receita"}</span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600 tracking-[-0.5px]">R$</span>
            <Controller
            name="value"
            defaultValue="0"
            control={control}
            render = {({field: {onChange, value}}) => (
              <InputCurrency value={value} onChange={onChange} error={ errors.value?.message } />
              )}
            />
          </div>
        </div>

        <div className="space-y-4 mt-10">
          <Input type="text" error={errors.name?.message} placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"} {...register('name')}/>
          <Controller
            name="categoryId"
            defaultValue=""
            control={control}
            render ={({field: {onChange, value}}) => (
              <Select error={errors.categoryId?.message} onChange={onChange} value={value} placeholder="Categoria" options={categories.map(category => ({
                label: category.name,
                value: category.id
              }))}/>
            )}
          />

          <Controller
            name="bankAccountId"
            defaultValue=""
            control={control}
            render={({field: {onChange, value}}) => (
              <Select error={errors.bankAccountId?.message} onChange={onChange} value={value} placeholder={isExpense ? "Pagar com" : "Receber na conta"}
              options={accounts.map(account => ({
                label: account.name,
                value: account.id
              }))}/>
            )}
          />

            <Controller
              control={control}
              name="date"
              defaultValue={new Date()}
              render={({field: {value, onChange}}) => (
                <DatePickerInput onChange={onChange} error={errors.date?.message} value={value} />
              )}
            />
        </div>
        <Button isLoading={isLoadingTransactions} disabled={false} type="submit" className="w-full h-14 mt-6">Criar</Button>
      </form>
    </Modal>
  )
}
