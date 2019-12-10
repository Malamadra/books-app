import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
import BookInfo from './BookInfo'

const CardWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 15px 0;
  display: flex;
`

const Number = styled.div`
  min-width: 10px;
  background: ${colors.pink};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 0 5px;
`

const CardContentWrapper = styled.div`
  display: flex;
  width: 100%;
`

const FriendInfo = styled.div`
  width: 30%;
`

const Card = ({ title, author }) => {
  return (
    <CardWrapper>
      <Number>10</Number>
      <CardContentWrapper>
        <BookInfo title={title} author={author} />
        <FriendInfo>Katushka</FriendInfo>
      </CardContentWrapper>
    </CardWrapper>
  )
}

export default Card
