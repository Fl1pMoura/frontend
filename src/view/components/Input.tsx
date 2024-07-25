import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'>{
  name: string
}

export function Input({ id, name, placeholder, ...props}: InputProps){
  const inputId = id ?? name
  return(
    <div className="relative">
      <input
      name={name}
      id={inputId}
      {...props}
      placeholder=" "
      className="bg-white px-3 border border-gray-500 rounded-lg h-[52px] w-full text-gray-800 pt-4 placeholder-shown:pt-0 focus:border-gray-800 hover:border-teal-900 outline-none peer transition-all"
      />
      <label htmlFor={inputId}
      className="absolute left-[13px] top-2 -translate-y-0 text-gray-700 pointer-events-none text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base transition-all"
      >
        {placeholder}
      </label>
    </div>
  )
}
