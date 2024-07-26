import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useLoginController } from "./useLoginController";

export function Login(){
  const { handleSubmit, register, errors } = useLoginController();
  return (
      <>
        <h1 className="text-gray-900 text-2xl font-bold mb-4 tracking-[-1px]">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
          <Link to={'/register'} className="font-medium text-teal-900 tracking-[-0.5px]">Crie uma conta</Link>
        </p>
        <form noValidate onSubmit={handleSubmit} className="w-full mt-[60px] flex flex-col gap-4">
          <Input error={errors.email?.message} type="email" placeholder="E-mail" {...register('email')}/>
          <Input error={errors.password?.message} type="password" placeholder="Senha" {...register('password')}/>
          <Button type="submit" className="mt-2 h-[54px]">Entrar</Button>
        </form>
      </>
  )
}
