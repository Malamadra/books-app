import React from 'react'
import MainLayout from 'layouts/MainLayout'
import List from 'components/List'
import AddEditBookDialog from 'components/AddEditBookDialog'
import { selectIsDialogOpen } from 'store/dialogSelectors'
import { connect } from 'react-redux'

const App = ({ isDialogOpen }) => {
  return (
    <MainLayout>
      <List />
      {isDialogOpen && <AddEditBookDialog />}
    </MainLayout>
  )
}

const mapState = state => ({
  isDialogOpen: selectIsDialogOpen(state)
})

export default connect(mapState)(App)
