import React from 'react'
import styled, { css } from 'styled-components'
import {
  TextField as TextFieldSrc,
  FormControlLabel,
  Checkbox as CheckboxSrc
} from '@material-ui/core'
import { KeyboardDatePicker as KeyboardDatePickerSrc } from '@material-ui/pickers'
import colors from 'constants/colors'

export const TextField = styled(TextFieldSrc)`
  .MuiInputBase-root:after {
    border-bottom: 2px solid ${colors.pinkLight};
  }

  .Mui-focused {
    color: ${colors.pinkLight};
  }
`

export const KeyboardDatePicker = styled(KeyboardDatePickerSrc)`
  .MuiInputBase-root:after {
    border-bottom: 2px solid ${colors.pinkLight};
  }

  .Mui-focused {
    color: ${colors.pinkLight};
  }
`

export const TextFieldDisabled = props => (
  <TextField {...props} onChange={() => {}} />
)

const FormControlLabelStyled = styled(({ checked, ...props }) => (
  <FormControlLabel {...props} />
))`
  &&&& {
    ${({ checked }) =>
      checked &&
      css`
        .MuiTypography-root {
          color: ${colors.greenLight};
        }

        .MuiIconButton-label {
          color: ${colors.greenLight};
        }
      `}
  }
`

export const Checkbox = ({ checked, handleChange, label }) => (
  <FormControlLabelStyled
    checked={checked}
    control={<CheckboxSrc checked={checked} onChange={handleChange} />}
    label={label}
  />
)
