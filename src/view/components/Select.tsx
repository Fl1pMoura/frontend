import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RdxSelect from '@radix-ui/react-select';
import React from 'react';
import { cn } from '../../app/utils/cn';


const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <RdxSelect.Item
      className={cn(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <RdxSelect.ItemText>{children}</RdxSelect.ItemText>
      <RdxSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </RdxSelect.ItemIndicator>
    </RdxSelect.Item>
  );
});

export function Select(){
  return(
    <RdxSelect.Root>
    <RdxSelect.Trigger
    className={cn(
      "bg-white px-3 border border-gray-500 rounded-lg h-[52px] w-full text-gray-800 placeholder-shown:pt-0 focus:border-gray-800 hover:border-teal-900 outline-none peer transition-all relative text-left",
    )}
    >
      <RdxSelect.Value className=''/>
      <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
        <ChevronDownIcon className='size-6 text-gray-800' />
      </RdxSelect.Icon>
    </RdxSelect.Trigger>

    <RdxSelect.Portal>
      <RdxSelect.Content className="z-[99] overflow-hidden bg-white relative rounded-2xl p-2 border border-gray-100 w-full max-w-[352px] shadow-[0px_11px_20px_0px_#0000001A]">
        <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
          <ChevronUpIcon />
        </RdxSelect.ScrollUpButton>
        <RdxSelect.Viewport className="p-[5px]">
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
        </RdxSelect.Viewport>
        <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
          <ChevronDownIcon />
        </RdxSelect.ScrollDownButton>
      </RdxSelect.Content>
    </RdxSelect.Portal>
  </RdxSelect.Root>
  )
}
