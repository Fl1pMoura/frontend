import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'>{
  isLoading?: boolean;
}

export function Button({isLoading, disabled ,className, children, ...props }: ButtonProps){
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={
        cn(
          "bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 outline-none disabled:cursor-not-allowed text-white px-6 h-12 rounded-2xl font-medium transition-all flex justify-center items-center",
           className)}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6"/>}
    </button>
  )
}
