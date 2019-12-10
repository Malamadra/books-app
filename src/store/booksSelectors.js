import { createSelector } from 'reselect'
import R from 'ramda'

const selectStateSegment = R.prop('books')

export const selectBooks = createSelector(
  selectStateSegment,
  R.propOr([], 'data')
)
