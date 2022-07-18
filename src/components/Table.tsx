import Link from "next/link";
import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { Client } from "../core/Client";
import { api } from "../services/api";
import { clientsGetRequest } from "../store/ducks/clients/actions";
import { DeleteModal } from "./DeleteModal";
import { EditIcon, TrashIcon } from "./Icons";


export interface TableProps {
  clients: Client[];
}



export function Table({ clients }: TableProps) {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const [userId, setUserId] = useState('')
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
		<>
    <table className={`w-full overflow-hidden  rounded-xl text-left`}>
      <tr
        className={`bg-gradient-to-r from-purple-600 to-purple-800 text-gray-100`}
      >
        <th className={`px-4 py-2 text-left`}>Código</th>
        <th className={`px-4 py-2 text-left`}>Nome</th>
        <th className={`px-4 py-2 text-left`}>Idade</th>
        <th className={`px-4 py-2 text-center`}>Ações</th>
      </tr>
      <tbody>
        {clients.map((client, i) => {
          return (
            <tr
              key={client.id}
              className={`${i % 2 === 0 ? "bg-purple-300" : "bg-purple-100"}`}
            >
              <td className={`px-4 py-2 text-left`}>{client.id}</td>
              <td className={`px-4 py-2 text-left`}>{client.name}</td>
              <td className={`px-4 py-2 text-left`}>{client.age}</td>
              <td className={`px-4 py-2 text-center `}>
                <Link
                  href={`/form?name=${client.name}&id=${client.id}&age=${client.age}`}
                >
                  <button
                    className={`rounded-2xl p-1 text-green-600 hover:bg-green-200`}
                  >
                    <EditIcon />
                  </button>
                </Link>
                <button
                  onClick={() => {
										setUserId(client.id)
										setIsDeleteModalOpen(true)
									}}
                  className={`rounded-2xl p-1 text-red-600 hover:bg-red-200`}
                >
                  <TrashIcon />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
		<ReactModal 
			isOpen={isDeleteModalOpen}
			onRequestClose={() => setIsDeleteModalOpen(false)}
			overlayClassName={'modal-overlay'}
			className='Modal'
		>
			<DeleteModal 
			closeModal={() => setIsDeleteModalOpen(false)}
			onClick={() => handleDelete(userId)}			
			/>
		</ReactModal>
		</>
  );
}
