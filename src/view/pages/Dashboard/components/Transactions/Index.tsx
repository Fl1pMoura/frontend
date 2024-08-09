import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import emptyStateImage from "../../../../../assets/empty-state.svg";
import { Spinner } from "../../../../components/Spinner";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { SliderNavigation } from "./SliderNavigation";
import { SliderOptions } from "./SliderOptions";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { useTransactionsController } from "./useTransactionsController";

export function Transactions(){
  const { areValuesVisible, isInitialFetching, transactions, isFetching } = useTransactionsController();

  return (
    <div className="w-full h-full bg-gray-100 rounded-2xl px-4 pt-6 pb-[136px] lg:p-10 max-h-full flex flex-col">

      {isInitialFetching && (
        <div className='h-full w-full flex items-center justify-center'>
          <Spinner className="w-12 h-12"/>
        </div>
      )}

      {!isInitialFetching && (
        <>
          <div className="flex justify-between">
            <TransactionTypeDropdown/>
            <button className="h-12 w-12 flex items-center justify-center">
              <FilterIcon/>
              </button>
          </div>

          <div className="mt-6 mb-2 lg:mb-4 relative">
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

          {isFetching && (
            <div className="flex flex-col items-center justify-center gap-7 h-full">
              <Spinner className="w-12 h-12"/>
            </div>
          )}

          {(transactions.length === 0 && !isFetching ) && (
            <figure className="flex flex-col items-center justify-center gap-7 h-full">
              <img className="select-none" src={emptyStateImage} alt="Não encontramos nenhuma transação!" />
              <figcaption className="text-gray-700">Não encontramos nenhuma transação!</figcaption>
            </figure>
          )}

          {(transactions.length > 0 && !isFetching) && (
              <ul className="space-y-2 overflow-y-auto flex-1">
              <li className="w-full rounded-2xl bg-white p-4 flex justify-between gap-4 items-center">
                <div className="flex gap-3">
                  <CategoryIcon type="expense" category="food"/>
                  <div>
                    <strong className="text-gray-800 tracking-[-0.5px] block">Almoço</strong>
                    <span className="text-gray-600">04/06/2023</span>
                  </div>
                </div>
                <span className={cn(
                  "font-medium tracking-[-0.5px] text-red-800 transition-all",
                  !areValuesVisible && "blur-sm"
                  )}>
                  {formatCurrency(123)}
                </span>
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
          )}
        </>
      )}
    </div>
  )
}
