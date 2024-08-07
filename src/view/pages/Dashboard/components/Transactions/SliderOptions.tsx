import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";

interface SliderOptionsProps{
  isActive: boolean,
  month: string,
  index: number
}

export function SliderOptions({isActive, month, index}:SliderOptionsProps){
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideTo(index)} className={cn(
      "w-full h-12 rounded-full text-gray-800 tracking-[-0.5px] font-medium text-sm",
      isActive && "bg-white"
    )}>{month}</button>
  )
}
