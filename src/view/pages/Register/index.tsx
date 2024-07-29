import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register(){
  const {errors, handleSubmit, register, isPending} = useRegisterController();
  return (
      <>
        <h1 className="text-gray-900 text-2xl font-bold mb-4 tracking-[-1px]">Crie sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span>
          <Link to={'/login'} className="font-medium text-teal-900 tracking-[-0.5px]">Fazer Login</Link>
        </p>
        <form onSubmit={ handleSubmit } className="w-full mt-[60px] flex flex-col gap-4">
          <Input error={errors.name?.message} {...register("name")} type="name" placeholder="Nome"/>
          <Input error={errors.email?.message} {...register("email")} type="email" placeholder="E-mail"/>
          <Input error={errors.password?.message} {...register("password")} type="password" placeholder="Senha"/>
          <Button type="submit" className="mt-2 h-[54px]" isLoading={isPending} >Criar conta</Button>
        </form>
      </>
  )
}
