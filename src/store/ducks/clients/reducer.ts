import { Reducer } from "redux";
import { ClientsState, ClientType } from "./types";


interface ActionType{
	type: string
	payload: any
}


const initialState: ClientsState = {
	data: [],
	error: false,
	loading: false
}


const reducer: Reducer<ClientsState> = (state = initialState, action) => {
	switch(action.type){
		case ClientType.CLIENTS_GET_REQUEST:	
			return { ...state, loading: true }
		case ClientType.CLIENTS_SUCCESS:
			return { ...state, data: action.payload, loading: false}
		case ClientType.CLIENTS_GET_FAILURE:
			return { ...state, error: true}
		default:
			return state

	}
} 


export default reducer