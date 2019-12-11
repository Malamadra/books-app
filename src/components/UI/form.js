import styled from 'styled-components'
import { TextField as TextFieldSrc } from '@material-ui/core'
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
