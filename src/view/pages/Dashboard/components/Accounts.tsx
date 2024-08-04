import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";

export function Accounts(){
  const [isOpen, setIsOpen] = useState(false);
  function handleShowBalance(){
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full h-full bg-teal-900 rounded-2xl flex flex-col py-8 px-4 lg:p-10 text-white">
      <span className="tracking-[-0.5px]">Saldo total</span>

      <div className="flex gap-2 items-center">
        <strong className="text-2xl tracking-[-1px]">R$ 100,00</strong>
        <button onClick={handleShowBalance} className="p-2">
          <EyeIcon open={isOpen}/>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-end">
          <div className="flex justify-between items-center">
            <strong className="tracking-[-1px] text-lg">Minhas Contas</strong>
            <div>
              <button disabled className="py-3 pr-3.5 pl-2.5 rounded-full transition-colors enabled:hover:bg-black/10 disabled:opacity-40">
                <ChevronLeftIcon className="h-6 w-6"/>
              </button>
              <button className="py-3 pr-3.5 pl-2.5 rounded-full transition-colors enabled:hover:bg-black/10 disabled:opacity-40">
                <ChevronRightIcon className="h-6 w-6"/>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <AccountCard balance={1000} color="#7950F2" name="Nubank" type="CASH"/>
          </div>
      </div>

    </div>
  )
}
