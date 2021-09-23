import { createStore } from 'redux'
import rootReducer from './modules/rootReducer'

// initial state of the store
const store = createStore(rootReducer)

export default store