import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { Delete, MoreVert } from '@material-ui/icons'
import { connect } from 'react-redux'
import { removeBook } from 'store/booksReducer'
import { openDialog } from 'store/dialogReducer'

const ToolBarWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`

const ToolBar = ({ id, removeBook, openDialog }) => {
  return (
    <ToolBarWrapper>
      <IconButton size="small" onClick={() => openDialog(id)}>
        <MoreVert />
      </IconButton>
      <IconButton size="small" onClick={() => removeBook(id)}>
        <Delete />
      </IconButton>
    </ToolBarWrapper>
  )
}

const mapDispatch = {
  removeBook,
  openDialog
}

export default connect(
  null,
  mapDispatch
)(ToolBar)
