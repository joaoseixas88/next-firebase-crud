import { Client } from "./Client";


export interface ClientRepository {
	getAll():Promise<Client[]>
	save(name: string, age: number): Promise<Client>
	delete(id: string):Promise<void>
	update(id: string, name: string, age: string): Promise<void>
	}