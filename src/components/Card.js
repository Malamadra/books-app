import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
import { TextMain, SubText } from 'components/UI/common'
import { getDateToShow } from 'utils/date'
import ToolBar from './ToolBar'
import { StaticWrapper } from '@material-ui/pickers/wrappers/StaticWrapper'

const CardWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 15px 0;
  display: flex;
  border: 1px solid ${colors.lightGrey};
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

const BookInfo = styled.div`
  width: 70%;
  background: ${colors.white};
  padding: 40px 20px;
  box-sizing: border-box;
`

const FriendInfo = styled.div`
  width: 30%;
  background: ${colors.darkSky};
  padding: 40px 20px;
  box-sizing: border-box;
  position: relative;
`

const StatusWrapper = styled.div`
  text-align: center;
`

const Status = styled.span`
  ${({ color }) => color && `color: ${color}`};
`

const Card = ({
  title,
  author,
  friend,
  index,
  id,
  createdAt,
  until,
  isReturned
}) => (
  <CardWrapper>
    <Number>{index + 1}</Number>
    <CardContentWrapper>
      <BookInfo>
        <TextMain marginBottom="10px">{title}</TextMain>
        <SubText fontWeight="bold">{author}</SubText>
      </BookInfo>
      <FriendInfo>
        <ToolBar id={id} />
        <TextMain textAlign="center" marginBottom="20px">
          {friend}
        </TextMain>
        <SubText textAlign="center" marginBottom="5px">
          {getDateToShow(createdAt)} - {getDateToShow(until)}
        </SubText>
        <StatusWrapper>
          Status:{' '}
          <Status color={isReturned ? colors.greenLight : colors.red}>
            {isReturned ? 'Returned' : 'Lent'}
          </Status>
        </StatusWrapper>
      </FriendInfo>
    </CardContentWrapper>
  </CardWrapper>
)

export default Card
