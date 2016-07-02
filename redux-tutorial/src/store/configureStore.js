// import { createStore, applyMiddleware } from 'redux'
import { createStore} from 'redux'
import rootReducer from '../reducers'
console.log(rootReducer)

export default function configureStore (initialState) {
  const store = createStore( rootReducer, initialState)
  return store
  // if (module.hot) {
  //   module.hot.accept('../reducers/', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }
}
