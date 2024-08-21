import { Button } from "./Button";
import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

interface ConfirmDeleteModalProps{
  onClose(): void,
  title: string,
  description?: string
}

export function ConfirmDeleteModal({onClose, title, description}: ConfirmDeleteModalProps){
  return(
    <Modal onClose={onClose} open title="Excluir" >
        <div className="flex flex-col justify-center items-center gap-6 text-gray-800 text-center">
          <TrashIcon className="size-[24px] text-red-900 p-[14px] box-content bg-red-50 rounded-full"/>
          <strong className="max-w-44 tracking-[-0.5px]">{title}</strong>
          {description && <p className="tracking-[-0.5px]">{description}</p>}
        </div>

        <div className="mt-10 space-y-4">
          <Button variant="danger" className="w-full min-h-[54px]">Sim, desejo excluir</Button>
          <Button onClick={onClose} variant="ghost" className="w-full min-h-[54px]">Cancelar</Button>
        </div>
    </Modal>
  )
}
