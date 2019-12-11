import { selectBooks } from './booksSelectors'
import { createSelector } from 'reselect'
import R from 'ramda'

const selectStateSegment = R.prop('dialog')

export const selectIsDialogOpen = createSelector(
  selectStateSegment,
  R.prop('isOpen')
)

export const selectIsEditMode = createSelector(
  selectStateSegment,
  R.prop('isEditMode')
)

export const selectBookId = createSelector(
  selectStateSegment,
  R.prop('bookId')
)

export const selectBookToEdit = createSelector(
  selectBookId,
  selectBooks,
  (id, books) => R.find(R.propEq('id', id), books)
)
