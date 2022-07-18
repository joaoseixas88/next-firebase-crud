import type { NextApiRequest, NextApiResponse } from "next";
import { ClientUseCase } from "../../database/ClientUseCase";



export default async (req: NextApiRequest, res: NextApiResponse) => {
	

	const clientUseCase = new ClientUseCase()	

	if(req.method === 'PATCH'){
		const { id, name, age } = req.body

		const result = await clientUseCase.update(id, name, age)

		return res.status(200).json(result)
	}

	if(req.method === 'DELETE'){
		const { id } = req.body 
		const result = await clientUseCase.delete(id)

		return res.status(200).json(result)
	}

	if(req.method === 'POST'){
		const { name, age } = req.body 
		const result = await clientUseCase.save(name,age)
		return res.status(201).json(result)
	}	

	
	const clients = await clientUseCase.getAll()
	
	
  return res.status(200).json(clients)

}
