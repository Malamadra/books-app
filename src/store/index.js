import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import booksReducer from 'store/booksReducer'

export default createStore(
  combineReducers({
    books: booksReducer
  }),
  composeWithDevTools()
)
