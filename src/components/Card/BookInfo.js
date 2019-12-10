import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'

const BookInfoWrapper = styled.div`
  width: 70%;
  background: ${colors.white};
  padding: 40px 20px;
`

const BookTitle = styled.div`
  color: ${colors.pink};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const BookAuthor = styled.div`
  color: ${colors.darkGrey};
  font-size: 16px;
  font-weight: bold;
`

const BookInfo = ({ title, author }) => (
  <BookInfoWrapper>
    <BookTitle>{title}</BookTitle>
    <BookAuthor>from {author}</BookAuthor>
  </BookInfoWrapper>
)

export default BookInfo
