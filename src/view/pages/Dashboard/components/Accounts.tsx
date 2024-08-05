import { useState } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import AccountsSliderNavigation from "./AccountsSliderNavigation";

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
       <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
            className="max-w-full"
            >
          <div className="flex justify-between items-center mb-4" slot="container-start">
            <strong className="tracking-[-1px] text-lg">Minhas Contas</strong>
            <AccountsSliderNavigation />
          </div>
          <div>
              <SwiperSlide>
                <AccountCard balance={1000} color="#7950F2" name="Nubank" type="CHECKING"/>
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard balance={1000} color="#7950F2" name="Inter" type="INVESTMENT"/>
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard balance={1000} color="#7950F2" name="Carteira" type="CASH"/>
              </SwiperSlide>
          </div>
            </Swiper>
      </div>
    </div>
  )
}
