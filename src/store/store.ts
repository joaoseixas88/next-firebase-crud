import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';


const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)




export { store };

export type RootState = ReturnType<typeof store.getState>


