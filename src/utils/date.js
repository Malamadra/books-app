import { getTime, addDays } from 'date-fns'

export const getDatePlusWeek = () => {
  const date = addDays(new Date(), 7)

  return getTime(date)
}

export const getDatePlusDay = () => {
  const date = addDays(new Date(), 1)

  return getTime(date)
}
