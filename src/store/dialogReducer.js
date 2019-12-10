import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

const OPEN_DIALOG = 'Dialog/OPEN_DIALOG'
const CLOSE_DIALOG = 'Dialog/CLOSE_DIALOG'

const initialState = {
  isOpen: false,
  bookId: null
}

export const openDialog = createAction(OPEN_DIALOG)
export const closeDialog = createAction(CLOSE_DIALOG)

export default handleActions(
  {
    [OPEN_DIALOG]: (state, { payload: id }) =>
      R.evolve(
        {
          isOpen: R.T,
          bookId: R.always(id)
        },
        state
      ),
    [CLOSE_DIALOG]: state =>
      R.evolve(
        {
          isOpen: R.F,
          bookId: R.always(null)
        },
        state
      )
  },
  initialState
)
