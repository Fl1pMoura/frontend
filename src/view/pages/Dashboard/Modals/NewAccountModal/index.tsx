import { Modal } from "../../../../components/Modal";
import { useNewAccountModal } from "./useNewAccountModal";

export function NewAccountModal(){
  const { isNewAccountModalVisible, toggleNewAccountModalVisility } = useNewAccountModal();

  return(
    <Modal open={isNewAccountModalVisible} title="Nova Conta" onClose={toggleNewAccountModalVisility}>
      NewAccount
    </Modal>
  )
}
