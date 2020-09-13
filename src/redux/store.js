import { createStore } from 'redux'
import appReducer from './alasApp'

const store = createStore(appReducer)

export default store