import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export default function AccountsSliderNavigation(){
  const swiper = useSwiper();
  return (
    <div>
    <button
    onClick={() => swiper.slidePrev()}
    className="py-3 pr-3.5 pl-2.5 rounded-full transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
    >
      <ChevronLeftIcon className="h-6 w-6"/>
    </button>
    <button
    onClick={() => swiper.slideNext()}
    className="py-3 pr-3.5 pl-2.5 rounded-full transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
    >
      <ChevronRightIcon className="h-6 w-6"/>
    </button>
  </div>
  )
}
