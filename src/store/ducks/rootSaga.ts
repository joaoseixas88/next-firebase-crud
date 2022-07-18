import { all, takeLatest } from "redux-saga/effects";
import { ClientType } from "./clients/types";
import clients from './clients/sagas'


export default function* rootSaga(){

	yield all([
		takeLatest(ClientType.CLIENTS_GET_REQUEST, clients)
	])
}
