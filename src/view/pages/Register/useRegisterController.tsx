import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useAuth } from "../../../app/hooks/useAuth";
import { authService } from "../../../app/services/authService";
import { SignupParams } from "../../../app/services/authService/signup.";


const schema = z.object({
  name: z.string().min(3, 'Nome deve conter pelo menos 3 letras'),
  email: z.string().min(1, 'Email é obrigatório').email('Informe um email válido'),
  password: z.string().min(8, 'Senha deve conter ao menos 8 caracteres')
})
type FormData = z.infer<typeof schema>

export function useRegisterController(){
  const { handleSubmit: hookFormHandleSubmit ,register, formState:{errors} } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data)
    }
  })

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
     try{
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
     }catch{
      toast.error('ocorreu um erro ao criar sua conta')
     }
  })

  return {handleSubmit, register, errors, isPending}
}
