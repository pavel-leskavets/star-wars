import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

import './index.css'
import { App } from './App'

import '@fontsource/rubik/400.css'
import '@fontsource/rubik/600.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
