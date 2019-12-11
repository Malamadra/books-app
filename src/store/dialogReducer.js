import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

const OPEN_DIALOG = 'Dialog/OPEN_DIALOG'
const CLOSE_DIALOG = 'Dialog/CLOSE_DIALOG'

const initialState = {
  isOpen: false,
  bookId: null,
  isEditMode: false
}

export const openDialog = createAction(OPEN_DIALOG)
export const closeDialog = createAction(CLOSE_DIALOG)

export default handleActions(
  {
    [OPEN_DIALOG]: (state, { payload: { id, isEditMode = false } }) =>
      R.evolve(
        {
          isOpen: R.always(true),
          bookId: R.always(id),
          isEditMode: R.always(isEditMode)
        },
        state
      ),
    [CLOSE_DIALOG]: state =>
      R.evolve(
        {
          isOpen: R.always(false),
          bookId: R.always(null),
          isEditMode: R.always(false)
        },
        state
      )
  },
  initialState
)
