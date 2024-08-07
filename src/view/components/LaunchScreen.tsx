import { Transition } from "@headlessui/react";
import { Logo } from "./Logo";

interface LaunchScreenProps {
  isLoading: boolean,
}

export function LaunchScreen({ isLoading }: LaunchScreenProps){
  return (
    <Transition show={isLoading}>
      <div className="transition duration-300 ease-in-out data-[closed]:opacity-0 bg-teal-900 fixed left-0 top-0 w-full h-full grid place-items-center z-50">
        <Logo className="max-w-44 text-white animate-bounce-slow"/>
      </div>
    </Transition>
  )
}
