import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../features'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

// sagaMiddleware.run(rootSaga)

export default store
