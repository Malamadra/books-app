import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
import { IconButton } from '@material-ui/core'
import { TextMain } from 'components/UI/common'
import { AddToQueue } from '@material-ui/icons'
import { connect } from 'react-redux'
import { openDialog } from 'store/dialogReducer'

const AddBookSectionWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 5px 20px;
  background: ${colors.white};
  border-top: 1px solid ${colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const AddIconStyled = styled(AddToQueue)`
  color: ${colors.pink};
`

const AddBookSection = ({ openDialog }) => (
  <AddBookSectionWrapper>
    <Content>
      <IconButton size="medium" onClick={openDialog}>
        <AddIconStyled />
      </IconButton>
      <TextMain>Lend a new book away</TextMain>
    </Content>
  </AddBookSectionWrapper>
)

const mapDispatch = {
  openDialog
}

export default connect(
  null,
  mapDispatch
)(AddBookSection)
