import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'
import App from 'App'

const GlobalStyle = createGlobalStyle`  
  html {
    font-size: 100%;
  }
  
  body {
    overflow: hidden;
    a {
      text-decoration: none;
    }
  }
  
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  }  
  
  #root {
    min-height: 100%;
  }
`

const Root = (
  <>
    <GlobalStyle />
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </>
)

ReactDOM.render(Root, document.getElementById('root'))
