import { Outlet } from 'react-router-dom'
import illustration from '../../assets/illustration.png'
import { Logo } from '../components/Logo'

export function AuthLayout(){
  return (
    <section className="h-full w-full flex p-8">
      <div className="h-full w-1/2 flex flex-col justify-center items-center">
        <Logo className='h-6 w-[104px] text-gray-500'/>
        <div className='mt-16 w-full max-w-md'>
          <Outlet/>
        </div>
      </div>

      <div className="h-full w-1/2 relative">
        <figure className='w-full h-full max-w-[656px] max-h-[960px] ml-auto'>
          <img src={illustration} className='w-full h-full select-none object-cover rounded-[32px]'/>
        </figure>
          <div className='w-full max-w-[656px] bg-white px-10 py-12 absolute z-10 rounded-b-[32px] bottom-0 right-0'>
            <p className='text-xl font-medium text-gray-700'>
              <Logo className='h-8 w-[138px] mb-6 text-teal-900'/>
              Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
            </p>
          </div>

      </div>
    </section>
  )
}
