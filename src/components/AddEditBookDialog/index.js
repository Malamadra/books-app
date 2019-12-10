import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import { selectBookToEdit } from 'store/dialogSelectors'
import { closeDialog } from 'store/dialogReducer'
import { Grid } from '@material-ui/core'
import { TextField, KeyboardDatePicker } from 'components/UI/form'
import colors from 'constants/colors'

const DialogHeader = styled.div`
  background: ${colors.pinkLight};
  height: 40px;
  color: ${colors.white};
  font-size: 24px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.div`
  padding: 20px;
`

class AddEditBookDialog extends React.Component {
  state = {
    isSetInitially: false,
    fields: {
      title: '',
      author: '',
      friend: '',
      time: ''
    }
  }

  render() {
    const { closeDialog } = this.props

    return (
      <Dialog open onClose={closeDialog} fullWidth>
        <DialogHeader>Lending a book away</DialogHeader>
        <Form>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="Book title" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="Book author" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="Friend's name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Date picker inline"
                value={null}
                onChange={() => {}}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
          </Grid>
        </Form>
      </Dialog>
    )
  }
}

const mapState = state => ({
  bookToEdit: selectBookToEdit(state)
})

const mapDispatch = {
  closeDialog
}

export default connect(
  mapState,
  mapDispatch
)(AddEditBookDialog)
