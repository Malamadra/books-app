import React from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import colors from 'constants/colors'

export const PrimaryButton = styled(({ disabled, ...props }) => (
  <Button {...props} disabled={disabled} variant="contained" />
))`
  &&&& {
    background-color: ${colors.pinkLight};
    text-transform: none;
    color: ${colors.white};
    padding: 5px 40px;
    margin-left: 10px;

    &:hover {
      opacity: 0.8;
    }
    
    ${({ disabled }) => disabled && `background-color: ${colors.darkGrey}`};
  }
`

export const CancelButton = styled(Button)`
  &&&& {
    color: ${colors.darkGrey};
    text-transform: none;
    padding: 5px 10px;
  }
`
