import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useAccountController(){
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility} = useDashboard();

  return {sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility, isFetching: false, accounts: []}
}
