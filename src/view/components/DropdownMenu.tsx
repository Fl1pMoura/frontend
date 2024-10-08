import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../app/utils/cn';

function DropdownMenuRoot({children} : {children: React.ReactNode}){
  return(
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  )
}

function DropdownMenuTrigger({children, className} : {children: React.ReactNode, className?: string}){
  return(
    <RdxDropdownMenu.Trigger className={cn("outline-none", className)}>
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

function DropdownMenuContent({children, className, sideOffset, alignOffset} : {children: React.ReactNode, className?: string, sideOffset?: number, alignOffset?: number}){
  return(
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content sideOffset={sideOffset} alignOffset={alignOffset} className={cn("z-[99] bg-white rounded-2xl border-gray-100 border p-2 space-y-2 shadow-black/10 shadow-lg data-[side=bottom]:animate-slide-up-and-fade data-[side=top]:animate-slide-down-and-fade", className)}>
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

function DropdownMenuItem({children, className, onSelect} : {children: React.ReactNode, className?: string, onSelect?(): void}){
  return(
    <RdxDropdownMenu.Item
    onSelect={onSelect}
    className={cn(
      'cursor-pointer min-h-12 py-2 px-3 flex items-center gap-2 outline-none text-gray-800 text-sm font-medium rounded-2xl transition-all data-[highlighted]:bg-gray-50',
      className)
      }>
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
}
