import { Button } from "./Button";

interface DeleteModalProps {
  onClick: () => void;
	closeModal: () => void
}

export function DeleteModal({ onClick, closeModal }: DeleteModalProps) {
  return (
    <div
      className={`text-white" flex h-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-md`}
    >
      <div className={`bg-white w-5/6 flex flex-col h-5/6 p-4 rounded-md items-center justify-center gap-4`}>
				<h2>Você tem certeza que deseja deletar o usuário?</h2>
        <div className={`flex justify-end gap-3`}>
          <Button onClick={onClick} color="red">
            Deletar
          </Button>
          <Button onClick={closeModal} color="gray">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
