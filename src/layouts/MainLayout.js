import React from 'react'
import colors from 'constants/colors'
import styled from 'styled-components'

const Header = styled.div`
  position: fixed;
  background: ${colors.pink};
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 24px;
  width: 100%;
`

const Body = styled.div`
  background: ${colors.lightGrey};
  padding-top: 75px;
  height: calc(100vh - 75px);
`

const Content = styled.div`
  overflow: scroll;
  height: 100%;
`

const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 0 20px;
`

const MainLayout = ({ children }) => (
  <div>
    <Header>
      <Container>Books that I have lent to friends</Container>
    </Header>
    <Body>
      <Content>
        <Container>{children}</Container>
      </Content>
    </Body>
  </div>
)

export default MainLayout
