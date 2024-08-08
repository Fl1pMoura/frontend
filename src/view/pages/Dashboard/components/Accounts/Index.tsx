import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import AccountsSliderNavigation from "./AccountsSliderNavigation";
import { useAccountController } from "./useAccountController";

export function Accounts(){
  const { setSliderState, sliderState, windowWidth, areValuesVisible, toggleValuesVisibility} = useAccountController()

  return (
    <div className="w-full h-full bg-teal-900 rounded-2xl flex flex-col py-8 px-4 lg:p-10 text-white">
      <span className="tracking-[-0.5px]">Saldo total</span>

      <div className="flex gap-2 items-center">
        <strong className={cn(
          "text-2xl tracking-[-1px] transition-all",
          !areValuesVisible && "blur-md"
          )}>
            {formatCurrency(100)}
        </strong>
        <button onClick={toggleValuesVisibility} className="p-2">
          <EyeIcon open={!areValuesVisible}/>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-10 lg:mt-0">
       <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 600 ? 2.1 : 1.2}
            className="max-w-full"
            onSlideChange={swiper => setSliderState({isBeginning: swiper.isBeginning, isEnd: swiper.isEnd})}
            >
          <div className="flex justify-between items-center mb-4" slot="container-start">
            <strong className="tracking-[-1px] text-lg">Minhas Contas</strong>
            <AccountsSliderNavigation isBeggining={sliderState.isBeginning} isEnd={sliderState.isEnd}/>
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
