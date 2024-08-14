import * as RdxPopover from "@radix-ui/react-popover"
import { cn } from "../../app/utils/cn"

function PopoverRoot({children} : {children: React.ReactNode}){
  return(
      <RdxPopover.Root>
        {children}
      </RdxPopover.Root>
  )
}

function PopoverTrigger({children, className} : {children: React.ReactNode, className?: string}){
  return(
      <RdxPopover.Trigger className={className}>
        {children}
      </RdxPopover.Trigger>
  )
}

function PopoverContent({children, className} : {children: React.ReactNode, className?: string}){
  return(
    <RdxPopover.Portal>
      <RdxPopover.Content className={cn("z-[99] bg-white rounded-2xl border-gray-100 border p-4 space-y-2 shadow-black/10 shadow-lg data-[side=bottom]:animate-slide-up-and-fade data-[side=top]:animate-slide-down-and-fade", className)}>
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  )
}

export const Popover ={
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
}
