import { ExitIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../app/hooks/useAuth";
import { DropdownMenu } from "./DropdownMenu";


export function UserMenu(){
  const { signout } = useAuth();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" bg-teal-50 rounded-full cursor-pointer h-12 w-12 flex items-center justify-center border border-teal-100 select-none">
        <span className="text-sm text-teal-900 text-center tracking-[-0.5px] font-medium">FM</span>
      </DropdownMenu.Trigger >

        <DropdownMenu.Content className="w-32">
          <DropdownMenu.Item onSelect={signout} className="justify-between group">
            Sair
            <ExitIcon className="size-4 transition-all text-gray-900 group-data-[highlighted]:text-red-700"/>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
