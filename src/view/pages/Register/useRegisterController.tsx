import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";


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

  const handleSubmit = hookFormHandleSubmit(async (data) => {
     const { accessToken }  = await authService.signup(data);
     console.log({ accessToken })
  })

  return {handleSubmit, register, errors}
}
