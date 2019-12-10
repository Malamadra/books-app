import React from 'react'
import { connect } from 'react-redux'
import { selectBooks } from 'store/booksSelectors'
import Card from './Card'

const List = ({ data }) => {
  return data.map(({ id, ...rest }) => <Card key={id} {...rest} />)
}

const mapState = state => ({
  data: selectBooks(state)
})

export default connect(mapState)(List)
