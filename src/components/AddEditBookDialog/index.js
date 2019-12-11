import React from 'react'
import R from 'ramda'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import { selectBookToEdit, selectIsEditMode } from 'store/dialogSelectors'
import { closeDialog } from 'store/dialogReducer'
import { addBook, editBook } from 'store/booksReducer'
import { Grid } from '@material-ui/core'
import {
  TextField,
  KeyboardDatePicker,
  TextFieldDisabled,
  Checkbox
} from 'components/UI/form'
import colors from 'constants/colors'
import { PrimaryButton, CancelButton } from 'components/UI/Button'
import { getDatePlusWeek, getDatePlusDay } from 'utils/date'
import uuid from 'uuid'
import { getTime } from 'date-fns'

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

const WarningMessage = styled.div`
  margin-bottom: 10px;
  color: ${colors.red};
  font-size: 14px;
`

const validateForm = R.pipe(
  R.values,
  R.any(R.isEmpty),
  R.not
)

class AddEditBookDialog extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const { isEditMode, bookToEdit } = props
    const { isSetInitially } = state

    if (!isSetInitially && isEditMode && !!bookToEdit) {
      const { title, author, friend, until, isReturned } = bookToEdit

      return {
        isSetInitially: true,
        fields: {
          title,
          author,
          friend,
          until,
          isReturned
        }
      }
    }

    if (!isSetInitially && !isEditMode) {
      return {
        isSetInitially: true,
        fields: {
          ...state.fields,
          until: getDatePlusWeek()
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
      until: '',
      isReturned: false
    }
  }

  handleAdd = () => {
    const { addBook, closeDialog } = this.props
    const { fields } = this.state

    addBook({
      id: uuid(),
      title: fields.title,
      author: fields.author,
      friend: fields.friend,
      createdAt: Date.now(),
      until: fields.until,
      isReturned: false
    })

    closeDialog()
  }

  handleEdit = () => {
    const { editBook, bookToEdit, closeDialog } = this.props
    const { fields } = this.state

    editBook({
      id: bookToEdit.id,
      updatedFields: fields
    })

    closeDialog()
  }

  handleSave = () => {
    const { isEditMode } = this.props

    return isEditMode ? this.handleEdit() : this.handleAdd()
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

  handleIsReturnedChange = () =>
    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        isReturned: !fields.isReturned
      }
    }))

  handlePickerChange = date =>
    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        until: getTime(date)
      }
    }))

  render() {
    const { closeDialog, isEditMode } = this.props
    const { fields } = this.state
    const isFormValid = validateForm(fields)

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
                minDate={getDatePlusDay()}
                onChange={this.handlePickerChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
                TextFieldComponent={TextFieldDisabled}
              />
            </Grid>
            {isEditMode && (
              <Grid item xs={12}>
                <Checkbox
                  checked={fields.isReturned}
                  handleChange={this.handleIsReturnedChange}
                  label="Book has been returned back"
                />
              </Grid>
            )}
          </Grid>
        </Form>
        <ButtonsSection>
          {!isFormValid && (
            <WarningMessage>Fill all the fields before saving!</WarningMessage>
          )}
          <div>
            <CancelButton onClick={closeDialog}>Cancel</CancelButton>
            <PrimaryButton onClick={this.handleSave} disabled={!isFormValid}>
              Save
            </PrimaryButton>
          </div>
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
  closeDialog,
  addBook,
  editBook
}

export default connect(
  mapState,
  mapDispatch
)(AddEditBookDialog)
