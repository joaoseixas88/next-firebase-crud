import { Client } from "../../../core/Client";

export enum ClientType{
	CLIENTS_GET_REQUEST = 'CLIENTS_GET_REQUEST',
	CLIENTS_SUCCESS = 'CLIENTS_GET_SUCCESS',
	CLIENTS_GET_FAILURE = 'CLIENTS_GET_FAILURE'
}


export interface ClientsState{
	readonly data: Client[]
	loading: boolean;
	error: boolean;
}