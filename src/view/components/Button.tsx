import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'>{}

export function Button({ className, ...props }: ButtonProps){
  const defaultClasses = "bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white px-6 h-12 rounded-2xl font-medium transition-all";

  return (
    <button
      {...props}
      className={`${defaultClasses} ${className || ''}`}
    ></button>
  )
}
