import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appStore from './reducers'

export default createStore(
  appStore,
  applyMiddleware(thunk)
)