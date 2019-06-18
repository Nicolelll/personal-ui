import { createStore, combineReducers } from 'redux'

import Test from './test/reducers';
import User from './user/reducers';

// import * as Test from './test'
// import * as User from './user'

// const controllers = {
//   Test,
//   // User,
// }

// let obj = {}

// for (const key in controllers) {
//   if (controllers.hasOwnProperty(key)) {
//     const element = controllers[key];
//     obj[key] = element['reducers']
//   }
// }

const reducer = combineReducers(
  Test,
  User,
)

const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default Store
