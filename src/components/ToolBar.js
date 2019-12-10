import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { Delete, MoreVert } from '@material-ui/icons'
import { connect } from 'react-redux'
import { removeBook } from 'store/booksReducer'

const ToolBarWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`

const ToolBar = ({ id, removeBook }) => {
  return (
    <ToolBarWrapper>
      <IconButton size="small">
        <MoreVert />
      </IconButton>
      <IconButton size="small" onClick={() => removeBook(id)}>
        <Delete />
      </IconButton>
    </ToolBarWrapper>
  )
}

const mapDispatch = {
  removeBook
}

export default connect(
  null,
  mapDispatch
)(ToolBar)
