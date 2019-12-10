import { Card } from '@material-ui/core'
import styled from 'styled-components'
import colors from 'constants/colors'

export const TextMain = styled.div`
  color: ${colors.pink};
  font-size: 16px;
  font-weight: bold;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const SubText = styled.div`
  color: ${colors.darkGrey};
  font-size: 16px;
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`

export const Placeholder = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  margin: 50px 0;
`
