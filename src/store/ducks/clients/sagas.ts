import { AxiosResponse } from 'axios'
import { call, put  } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { clientsFailure, clientsSucces } from './actions'



export default function* load(){
	('chegou aqui')
	try {
		const response: AxiosResponse = yield call(
			api.get,
			'clients'
		)

		yield put(clientsSucces(response.data))
	} catch (err) {
		yield put(clientsFailure())
	}
}