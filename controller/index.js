import { createStore, combineReducers } from 'redux'

import reducers from './test/reducers';

const reducer = combineReducers(reducers)
const Store = createStore(reducer)

export default Store
