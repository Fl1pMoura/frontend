import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'>{
  isLoading?: boolean;
  variant ?: 'danger' | 'ghost';
}

export function Button({isLoading, disabled ,className, children, variant, ...props }: ButtonProps){
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={
        cn(
          "bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 outline-none disabled:cursor-not-allowed text-white px-6 h-12 rounded-2xl font-medium transition-all flex justify-center items-center",
          variant === 'danger' && "bg-red-900 hover:bg-red-800",
          variant === 'ghost' && "bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-700 hover:text-white",
          className)}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6"/>}
    </button>
  )
}
