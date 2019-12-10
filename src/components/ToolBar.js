import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { Delete, MoreVert } from '@material-ui/icons'

const ToolBarWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`

const ToolBar = ({ id }) => {
  return (
    <ToolBarWrapper>
      <IconButton size='small'>
        <MoreVert />
      </IconButton>
      <IconButton size='small'>
        <Delete />
      </IconButton>
    </ToolBarWrapper>
  )
}

export default ToolBar
