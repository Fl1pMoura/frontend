import { PlusIcon } from '@radix-ui/react-icons';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { Spinner } from '../../../../components/Spinner';
import { useDashboard } from '../DashboardContext/useDashboard';
import { AccountCard } from './AccountCard';
import AccountsSliderNavigation from './AccountsSliderNavigation';
import { useAccountController } from "./useAccountController";

export function Accounts(){
  const { setSliderState, sliderState, windowWidth, areValuesVisible, toggleValuesVisibility, isFetching, accounts, currentBalance} = useAccountController()
  const { toggleNewAccountModalVisibility } = useDashboard();

  return (
    <div className="w-full h-full bg-teal-900 rounded-2xl flex flex-col py-8 px-4 lg:p-10 text-white">

      {isFetching && (
        <div className='h-full w-full flex items-center justify-center'>
          <Spinner className="text-teal-950/55 fill-slate-100/80 w-12 h-12"/>
        </div>
      )}

      {!isFetching && (
        <>
            <span className="tracking-[-0.5px]">Saldo total</span>

            <div className="flex gap-2 items-center">
              <strong className={cn(
                "text-2xl tracking-[-1px] transition-all",
                !areValuesVisible && "blur-md"
                )}>
                  {formatCurrency(currentBalance)}
              </strong>
              <button onClick={toggleValuesVisibility} className="p-2">
                <EyeIcon open={!areValuesVisible}/>
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-end mt-10 lg:mt-0">
              {accounts.length === 0 && (
                <div className="mb-4" slot="container-start">
                  <strong className="tracking-[-1px] text-lg">Minhas Contas</strong>
                  <button onClick={toggleNewAccountModalVisibility} className='w-full px-4 py-12 border-2 border-dashed border-teal-600 rounded-2xl mt-4 flex flex-col items-center justify-center gap-4'>
                    <div className='w-11 h-11 border-2 border-dashed border-white rounded-full flex items-center justify-center text-white'>
                      <PlusIcon className='w-6 h-6'/>
                    </div>
                    <span className='tracking-[-0.5px] font-medium text-center max-w-28 block mx-auto'>Cadastre uma nova conta</span>
                  </button>
                </div>
              )}

              {accounts.length > 0 && (
                    <Swiper
                    spaceBetween={16}
                    slidesPerView={windowWidth >= 600 ? 2.1 : 1.2}
                    className="max-w-full w-full"
                    onSlideChange={swiper => setSliderState({isBeginning: swiper.isBeginning, isEnd: swiper.isEnd})}
                    >
                  <div className="flex justify-between items-center mb-4" slot="container-start">
                    <strong className="tracking-[-1px] text-lg">Minhas Contas</strong>
                    <AccountsSliderNavigation isBeggining={sliderState.isBeginning} isEnd={sliderState.isEnd}/>
                  </div>
                  <div>

                    {accounts.map(account => (
                      <SwiperSlide key={account.id} className='w-full'>
                      <AccountCard data={account}/>
                    </SwiperSlide>
                    ))}
                  </div>
                    </Swiper>
              )}
            </div>
        </>
      )}
    </div>
  )
}
