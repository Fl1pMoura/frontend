import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";

export function Dashboard(){
  return (
    <section className="h-full w-full p-8 pt-6 flex flex-col gap-4">
      <header className="flex justify-between min-h-12 items-center ">
        <Logo className="max-w-[106px] text-teal-900"/>
        <UserMenu/>
      </header>
      <div className="flex-1 flex gap-4">
        <section className="bg-red-500 w-1/2 rounded-2xl p-10">
          esquerda
        </section>
        <section className="bg-blue-500 w-1/2 rounded-2xl p-10">
          direita
        </section>
      </div>
    </section>
  )
}
