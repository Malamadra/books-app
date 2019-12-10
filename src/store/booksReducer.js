import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

const ADD_BOOK = 'Books/ADD_BOOK'

const initialData = [
  {
    id: '1',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    friend: 'Jack Johnson',
    createdAt: '',
    closedAt: ''
  },
  {
    id: '2',
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    friend: 'Richard Smith',
    createdAt: '',
    closedAt: ''
  },
  {
    id: '3',
    title: 'Hamlet',
    author: 'William Shakespeare',
    friend: 'Adam Snowden',
    createdAt: '',
    closedAt: ''
  }
]

const initialState = {
  data: initialData
}

export const addBook = createAction(ADD_BOOK)

export default handleActions(
  {
    [ADD_BOOK]: (state, { payload }) =>
      R.evolve(
        {
          data: R.append(payload)
        },
        state
      )
  },
  initialState
)
