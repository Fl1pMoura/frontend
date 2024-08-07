import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { SliderNavigation } from "./SliderNavigation";
import { SliderOptions } from "./SliderOptions";

export function Transactions(){
  return (
    <div className="w-full h-full bg-gray-100 rounded-2xl px-4 pt-6 pb-[136px] lg:p-10 max-h-full flex flex-col">
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

      <ul className="space-y-2 overflow-y-auto flex-1">
        <li className="w-full rounded-2xl bg-white p-4 flex justify-between gap-4 items-center">
          <div className="flex gap-3">
            <CategoryIcon type="expense" category="food"/>
            <div>
              <strong className="text-gray-800 tracking-[-0.5px] block">Almoço</strong>
              <span className="text-gray-600">04/06/2023</span>
            </div>
          </div>
          <span className="font-medium tracking-[-0.5px] text-red-800">{formatCurrency(123)}</span>
        </li>

        <li className="w-full rounded-2xl bg-white p-4 flex justify-between gap-4 items-center">
          <div className="flex gap-3">
            <CategoryIcon type="income"/>
            <div>
              <strong className="text-gray-800 tracking-[-0.5px] block">Almoço</strong>
              <span className="text-gray-600">04/06/2023</span>
            </div>
          </div>
          <span className="font-medium tracking-[-0.5px] text-green-800">{formatCurrency(123)}</span>
        </li>
      </ul>
    </div>
  )
}
