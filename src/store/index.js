import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import booksReducer from 'store/booksReducer'
import dialogReducer from './dialogReducer'

export default createStore(
  combineReducers({
    books: booksReducer,
    dialog: dialogReducer
  }),
  composeWithDevTools()
)
