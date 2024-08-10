import { Logo } from "../../components/Logo";
import { Modal } from "../../components/Modal";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts/Index";
import { DashboardProvider } from "./components/DashboardContext";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions/Index";


export function Dashboard(){
  return (
    <DashboardProvider>
    <section className="h-full w-full flex flex-col p-4 gap-2 lg:gap-4 lg:p-8 lg:pt-6">
      <header className="flex justify-between min-h-12 items-center ">
        <Logo className="max-w-[106px] text-teal-900"/>
        <UserMenu/>
      </header>
      <div className="max-h-full flex-1 flex flex-col gap-8 lg:gap-4 lg:flex-row">
        <section className="w-full lg:w-1/2">
          <Accounts/>
        </section>
        <section className="w-full lg:w-1/2">
          <Transactions/>
        </section>
      </div>
      <Modal open title="Receitas">
        a
      </Modal>
      <Fab/>
    </section>
    </DashboardProvider>
  )
}
