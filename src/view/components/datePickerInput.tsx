import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "../../app/utils/cn";
import { formatDate } from "../../app/utils/formatDate";
import { DatePicker } from "./DatePicker";
import { Popover } from "./Popover";

interface DatePickerInputProps{
  className?: string,
  error?: string,
}

export function DatePickerInput({ className, error }: DatePickerInputProps){
  const [selectedDate, setSelectedDate] = useState(new Date())
  return(
    <div>
      <Popover.Root>
        <Popover.Trigger className={cn(
              "bg-white px-3 border border-gray-500 rounded-lg h-[52px] w-full text-gray-700 placeholder-shown:pt-0 focus:border-gray-800 hover:border-teal-900 outline-none peer transition-all relative text-left pt-4",
              error && "!border-red-900",
              className,
              )}>
            <span className="absolute left-[13px] top-2 -translate-y-0 text-gray-700 pointer-events-none text-xs peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base transition-all">Data</span>
            <span>{formatDate(selectedDate)}</span>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)}/>
        </Popover.Content>
      </Popover.Root>

        {error &&(
        <div className='flex gap-2 items-center mt-2 text-red-900'>
            <CrossCircledIcon/>
          <span className="text-left w-full block text-xs">{error}</span>
        </div>
        )}
    </div>
  )
}
