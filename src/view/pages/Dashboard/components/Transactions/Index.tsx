import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { formatDate } from "../../../../../app/utils/formatDate";
import emptyStateImage from "../../../../../assets/empty-state.svg";
import { Spinner } from "../../../../components/Spinner";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { FiltersModal } from "./FiltersModal";
import { SliderNavigation } from "./SliderNavigation";
import { SliderOptions } from "./SliderOptions";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { useTransactionsController } from "./useTransactionsController";

export function Transactions(){
  const { areValuesVisible, isInitialFetching, transactions, isFetching, handleModalVisibility, isModalVisible, handleChangeFilters, filters, handleApplyFilters} = useTransactionsController();

  return (
    <div className="w-full h-full bg-gray-100 rounded-2xl px-4 pt-6 pb-[136px] lg:p-10 max-h-full flex flex-col">
      {isInitialFetching && (
        <div className='h-full w-full flex items-center justify-center'>
          <Spinner className="w-12 h-12"/>
        </div>
      )}

      {!isInitialFetching && (
        <>
          <FiltersModal onApplyFilters={handleApplyFilters} handleModalVisibility={handleModalVisibility} isModalVisible={isModalVisible}/>
          <div className="flex justify-between">
            <TransactionTypeDropdown onSelect={handleChangeFilters("transactionType")} selectedType={filters.transactionType} />
            <button onClick={handleModalVisibility} className="h-12 w-12 flex items-center justify-center">
              <FilterIcon/>
              </button>
          </div>

          <div className="mt-6 mb-2 lg:mb-4 relative">
            <Swiper
              slidesPerView={3}
              centeredSlides
              initialSlide={filters.month}
              onSlideChange={swiper => {
                handleChangeFilters("month")(swiper.realIndex)
              }}
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
                {transactions.map( transaction => (
                    <li key={transaction.id} className="w-full rounded-2xl bg-white p-4 flex justify-between gap-4 items-center">
                    <div className="flex gap-3">
                      <CategoryIcon type={transaction.type} category={transaction.category?.name}/>
                      <div>
                        <strong className="text-gray-800 tracking-[-0.5px] block">{transaction.name}</strong>
                        <span className="text-gray-600">{formatDate(new Date(transaction.date))}</span>
                      </div>
                    </div>
                    <span className={cn(
                      "font-medium tracking-[-0.5px] transition-all",
                      transaction.type === "EXPENSE"?"text-red-800":"text-green-800",
                      !areValuesVisible && "blur-sm"
                      )}>
                      {transaction.type === "EXPENSE"?"-":"+"}{formatCurrency(transaction.value)}
                    </span>
                  </li>
                ))}
              </ul>
          )}
        </>
      )}
    </div>
  )
}
