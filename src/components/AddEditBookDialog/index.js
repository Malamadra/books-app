import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import { selectBookToEdit, selectIsEditMode } from 'store/dialogSelectors'
import { closeDialog } from 'store/dialogReducer'
import { Grid } from '@material-ui/core'
import { TextField, KeyboardDatePicker } from 'components/UI/form'
import colors from 'constants/colors'
import { PrimaryButton, CancelButton } from 'components/UI/Button'

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

const ButtonsSection = styled.div`
  background: ${colors.lightGrey};
  padding: 10px 40px;
  text-align: right;
`

const Form = styled.div`
  padding: 20px;
`

class AddEditBookDialog extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const { isEditMode, bookToEdit } = props
    const { isSetInitially } = state

    if (!isSetInitially && isEditMode && !!bookToEdit) {
      const { title, author, friend, createdAt } = bookToEdit

      return {
        isSetInitially: true,
        fields: {
          title,
          author,
          friend
        }
      }
    }

    return null
  }

  state = {
    isSetInitially: false,
    fields: {
      title: '',
      author: '',
      friend: '',
      until: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.currentTarget

    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        [name]: value
      }
    }))
  }

  render() {
    const { closeDialog } = this.props
    const { fields } = this.state

    return (
      <Dialog open onClose={closeDialog} fullWidth>
        <DialogHeader>Lending a book away</DialogHeader>
        <Form>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="Book title"
                fullWidth
                value={fields.title}
                name="title"
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="Book author"
                fullWidth
                value={fields.author}
                name="author"
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="Friend's name"
                fullWidth
                value={fields.friend}
                name="friend"
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Until"
                value={fields.until}
                onChange={(...args) => console.log(args)}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
          </Grid>
        </Form>
        <ButtonsSection>
          <CancelButton>Cancel</CancelButton>
          <PrimaryButton>Save</PrimaryButton>
        </ButtonsSection>
      </Dialog>
    )
  }
}

const mapState = state => ({
  bookToEdit: selectBookToEdit(state),
  isEditMode: selectIsEditMode(state)
})

const mapDispatch = {
  closeDialog
}

export default connect(
  mapState,
  mapDispatch
)(AddEditBookDialog)
