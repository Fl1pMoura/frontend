import { NumericFormat } from "react-number-format"

export function InputCurrency(){
  return (
    <NumericFormat
      className="border-none outline-none font-bold text-gray-800 text-[32px] tracking-[-1px] w-full"
      thousandSeparator="."
      decimalSeparator=","
      allowNegative={false}
    />
  )
}
