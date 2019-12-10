import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

const ADD_BOOK = 'Books/ADD_BOOK'

const initialState = {
  books: [],
}

export const addBook = createAction(ADD_BOOK)

export default handleActions(
  {
    [ADD_BOOK]: (state, { payload }) =>
      R.evolve(
        {
          books: R.append(payload)
        },
        state
      ),
  },
  initialState
)
