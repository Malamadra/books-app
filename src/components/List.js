import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { selectBooks } from 'store/booksSelectors'
import { Placeholder, TextMain, SubText } from 'components/UI/common'
import Card from './Card'

const Wrapper = styled.div`
  margin: 20px 0 80px 0;
`

const ListTitle = styled.div`
  display: flex;

  ${TextMain} {
    width: 30%;
    text-align: center;
    font-style: italic;
  }

  ${SubText} {
    width: 70%;
    text-align: center;
  }
`

const List = ({ data }) => {
  if (!data || !data.length) {
    return <Placeholder>There are no lent books</Placeholder>
  }

  return (
    <Wrapper>
      <ListTitle>
        <SubText>You have lent {data.length} books to friends</SubText>
        <TextMain>Lent to:</TextMain>
      </ListTitle>
      {data.map(({ id, ...rest }, index) => (
        <Card key={id} {...rest} id={id} index={index} />
      ))}
    </Wrapper>
  )
}

const mapState = state => ({
  data: selectBooks(state)
})

export default connect(mapState)(List)
