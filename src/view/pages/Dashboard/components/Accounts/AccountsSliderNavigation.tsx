import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface AccountsSliderNavigationProps{
  isEnd: boolean,
  isBeggining: boolean,
}

export default function AccountsSliderNavigation({ isBeggining, isEnd }: AccountsSliderNavigationProps){
  const swiper = useSwiper();
  return (
    <div>
    <button
    onClick={() => swiper.slidePrev()}
    disabled={isBeggining}
    className="py-3 pr-3.5 pl-2.5 rounded-full transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
    >
      <ChevronLeftIcon className="h-6 w-6"/>
    </button>
    <button
    onClick={() => swiper.slideNext()}
    disabled={isEnd}
    className="py-3 pr-3.5 pl-2.5 rounded-full transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
    >
      <ChevronRightIcon className="h-6 w-6"/>
    </button>
  </div>
  )
}
