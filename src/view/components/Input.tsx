import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from "react";
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'>{
  name: string,
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, name, placeholder, error,...props}: InputProps, ref) => {
  const inputId = id ?? name

  return(
    <div className="relative">
      <input
      {...props}
      name={name}
      id={inputId}
      ref={ref}
      placeholder=" "
      className={cn(
        "bg-white px-3 border border-gray-500 rounded-lg h-[52px] w-full text-gray-800 pt-4 placeholder-shown:pt-0 focus:border-gray-800 hover:border-teal-900 outline-none peer transition-all",
        className,
        error && '!border-red-900'
      )}
      />
      <label htmlFor={inputId}
      className="absolute left-[13px] top-2 -translate-y-0 text-gray-700 pointer-events-none text-xs peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base transition-all"
      >
        {placeholder}
      </label>
      {error &&(
        <div className='flex gap-2 items-center mt-2 text-red-900'>
            <CrossCircledIcon/>
          <span className="text-left w-full block text-xs">{error}</span>
        </div>
      )}
    </div>
  )
});
