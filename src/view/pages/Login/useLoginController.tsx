import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Informe um email válido'),
  password: z.string().min(8, 'Senha deve conter ao menos 8 caracteres')
})
type FormData = z.infer<typeof schema>

export function useLoginController(){
    const { handleSubmit: hookFormHandleSubmit, register, formState:{errors}} = useForm<FormData>({
      resolver: zodResolver(schema)
    });

    const handleSubmit = hookFormHandleSubmit((data) => {
      console.log('chama api com:', data)
    })

    return {handleSubmit, register, errors}
}
