import { Client } from "../../../core/Client";
import { ClientType } from "./types";

export function clientsGetRequest(){	
	('actrion')
	return {
		type: ClientType.CLIENTS_GET_REQUEST
	}
}

export function clientsSucces(payload: Client[]){
	return {
		type: ClientType.CLIENTS_SUCCESS,
		payload
	}	
}

export function clientsFailure(){
	return {
		type: ClientType.CLIENTS_GET_FAILURE
	}	
}