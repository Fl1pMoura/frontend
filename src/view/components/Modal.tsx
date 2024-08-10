import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface ModalProps{
  open: boolean,
  children: React.ReactNode,
  title: string,
  rightAction?: React.ReactNode
}

export function Modal({ children, open, title, rightAction }: ModalProps){
  return (
      <Dialog.Root open={open}>
        <Dialog.Portal>
          <Dialog.Overlay
          className={cn(
            'fixed inset-0 bg-black/80 z-50 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show'
          )}/>
          <Dialog.Content  className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] bg-white p-6 rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px #0000001A] space-y-10 w-full max-w-[400px] outline-none",
            "data-[state=open]:animate-content-show"
          )}>
            <header className='flex items-center justify-between text-gray-800'>
              <button className='size-12 flex items-center justify-center outline-none'><Cross2Icon className='size-6'/></button>
              <Dialog.Title className='text-lg font-bold tracking-[-1px]'>{ title }</Dialog.Title>
              <button className='size-12 flex items-center justify-center outline-none'>{rightAction}</button>
            </header>
            <div>
              { children }
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}

