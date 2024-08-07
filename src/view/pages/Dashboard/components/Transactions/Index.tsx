import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { SliderNavigation } from "./SliderNavigation";
import { SliderOptions } from "./SliderOptions";

export function Transactions(){
  return (
    <div className="w-full h-full bg-gray-100 rounded-2xl px-4 pt-6 pb-[136px] lg:p-10 ">
      <div className="flex justify-between">
        <button className="flex gap-2 items-center h-12">
          <TransactionsIcon />
          <span className="font-medium text-gray-800 tracking-[-0.5px] text-sm">Transações</span>
          <ChevronDownIcon/>
        </button>
        <button className="h-12 w-12 flex items-center justify-center">
          <FilterIcon/>
          </button>
      </div>

      <div className="mt-6 mb-4 relative">
        <Swiper
          slidesPerView={3}
          centeredSlides
        >
          <SliderNavigation/>
          {MONTHS.map((month, index) => (
            <SwiperSlide key={month}>
              {({ isActive }) => (
                <SliderOptions isActive={isActive} month={month} index={index}/>
              )}
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
