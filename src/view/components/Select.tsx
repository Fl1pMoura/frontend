import { ChevronDownIcon, ChevronUpIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import * as RdxSelect from '@radix-ui/react-select';
import { useState } from 'react';
import { cn } from '../../app/utils/cn';

interface SelectProps{
  className ?: string,
  error?: string,
  placeholder?: string,
  options: {
    value: string,
    label: string
  }[],
}

export function Select({ className, error, placeholder, options }: SelectProps){
 const [selectedValue, setSelectedValue] = useState("")

  function handleSelect(value: string){
    setSelectedValue(value);
  }

  return(
    <>
        <div className="relative">
            <RdxSelect.Root onValueChange={handleSelect}>
                <RdxSelect.Trigger
                className={cn(
                  "bg-white px-3 border border-gray-500 rounded-lg h-[52px] w-full text-gray-800 placeholder-shown:pt-0 focus:border-gray-800 hover:border-teal-900 outline-none peer transition-all relative text-left pt-4",
                  error && "!border-red-900",
                  className,
                )}
                >
                  <RdxSelect.Value className=''/>
                  <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
                    <ChevronDownIcon className='size-6 text-gray-800' />
                  </RdxSelect.Icon>
                </RdxSelect.Trigger>

                <RdxSelect.Portal>
                  <RdxSelect.Content className="z-[99] overflow-hidden bg-white relative rounded-2xl border border-gray-100 w-full max-w-[352px] shadow-[0px_11px_20px_0px_#0000001A]">
                    <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
                      <ChevronUpIcon />
                    </RdxSelect.ScrollUpButton>
                    <RdxSelect.Viewport className="p-2 w-full space-y-2">
                      {options.map(option => (
                          <RdxSelect.Item
                          key={option.value}
                          value={option.value}
                          className="p-2 text-sm text-gray-800 outline-none data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 transition-all rounded-lg"
                            >
                          <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                          </RdxSelect.Item>
                      ))}
                    </RdxSelect.Viewport>
                    <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
                      <ChevronDownIcon />
                    </RdxSelect.ScrollDownButton>
                  </RdxSelect.Content>
                </RdxSelect.Portal>
              </RdxSelect.Root>

              <label
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none transition-all",
                selectedValue && "left-[13px] top-2 -translate-y-0 text-xs transition-all"
              )}
              >
                {placeholder}
              </label>
        </div>

          {error &&(
            <div className='flex gap-2 items-center mt-2 text-red-900'>
                <CrossCircledIcon/>
              <span className="text-left w-full block text-xs">{error}</span>
            </div>
          )}
    </>
  )
}
