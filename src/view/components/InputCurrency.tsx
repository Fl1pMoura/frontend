import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";

interface InputCurrencyProps{
  error?: string;
  onChange(value: string): void,
  value: string,
}

export function InputCurrency({error, onChange, value}: InputCurrencyProps){
  return (
    <div className="relative">
        <NumericFormat
          value={value}
          thousandSeparator="."
          decimalSeparator=","
          allowNegative={false}
          displayType="input"
          onValueChange={values => onChange(values.value)}
          className="border-none outline-none font-bold text-gray-800 text-[32px] tracking-[-1px] w-full"
        />

      {error &&(
        <div className='absolute left-0 -bottom-4 flex gap-2 items-center mt-2 text-red-900'>
            <CrossCircledIcon/>
          <span className="text-left w-full block text-xs">{error}</span>
        </div>
      )}
    </div>
  )
}
