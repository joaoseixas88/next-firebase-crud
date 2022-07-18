import Link from "next/link";
import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { Client } from "../core/Client";
import { api } from "../services/api";
import { clientsGetRequest } from "../store/ducks/clients/actions";
import { DeleteModal } from "./DeleteModal";
import { EditIcon, TrashIcon } from "./Icons";

interface MobileCardProps {
  client: Client;
}

export function MobileCard({ client }: MobileCardProps) {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const dispatch = useDispatch()

	const handleDelete = async (id: string) => {
		
		await api.delete('clients',{			
			data:{
				id
			}
		})		
		dispatch(clientsGetRequest())
		
	}
  return (
    <div className={`overflow-hidden rounded-md bg-purple-600 p-0.5`}>
      <div>
        <h1 className={`bg-purple-300 p-1`}>Código: </h1>
        <h1 className={`bg-purple-100 p-1`}>{client?.id}</h1>
      </div>
      <div className={`bg-purple-300 p-1`}>
        <h1>Nome: {client?.name}</h1>
      </div>
      <div className={`bg-purple-100 p-1`}>
        <h1>Idade: {client?.age}</h1>
      </div>
      <div className={`flex justify-around p-2`}>
        <Link
          href={`/form?name=${client.name}&id=${client.id}&age=${client.age}`}
        >
          <button
            className={`rounded-2xl p-1 text-green-300 hover:bg-green-200  overflow-hidden`}
          >
            <EditIcon />
          </button>
        </Link>
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className={`rounded-2xl p-1 text-red-400 hover:bg-red-200`}
        >
          <TrashIcon/>
        </button>
				<ReactModal 
			isOpen={isDeleteModalOpen}
			onRequestClose={() => setIsDeleteModalOpen(false)}
			overlayClassName={'modal-overlay'}
			className='Modal'
		>
			<DeleteModal 
			closeModal={() => setIsDeleteModalOpen(false)}
			onClick={() => handleDelete(client.id)}			
			/>
		</ReactModal>
      </div>
    </div>
  );
}
