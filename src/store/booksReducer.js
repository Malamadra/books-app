import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

const ADD_BOOK = 'Books/ADD_BOOK'
const REMOVE_BOOK = 'Books/REMOVE_BOOK'
const EDIT_BOOK = 'Books/EDIT_BOOK'

const initialData = [
  {
    id: '1',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    friend: 'Jack Johnson',
    createdAt: 1576063346723,
    until: 1580469720000,
    isReturned: false
  },
  {
    id: '2',
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    friend: 'Richard Smith',
    createdAt: 1576063346723,
    until: 1580469720000,
    isReturned: false
  },
  {
    id: '3',
    title: 'Hamlet',
    author: 'William Shakespeare',
    friend: 'Adam Snowden',
    createdAt: 1576063346723,
    until: 1580469720000,
    isReturned: false
  }
]

const initialState = {
  data: initialData
}

export const addBook = createAction(ADD_BOOK)
export const removeBook = createAction(REMOVE_BOOK)
export const editBook = createAction(EDIT_BOOK)

export default handleActions(
  {
    [ADD_BOOK]: (state, { payload }) =>
      R.evolve(
        {
          data: R.append(payload)
        },
        state
      ),
    [REMOVE_BOOK]: (state, { payload: id }) =>
      R.evolve(
        {
          data: R.reject(R.propEq('id', id))
        },
        state
      ),
    [EDIT_BOOK]: (state, { payload: { id, updatedFields } }) =>
      R.evolve(
        {
          data: R.map(
            R.ifElse(R.propEq('id', id), R.mergeLeft(updatedFields), R.identity)
          )
        },
        state
      )
  },
  initialState
)
