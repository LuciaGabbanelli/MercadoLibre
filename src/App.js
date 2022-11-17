import React from 'react'
// contexts
import ItemsState from './context/Items/ItemsState'
// react router (v6)
import { BrowserRouter } from 'react-router-dom'
// routes
import AppRoutes from './routes'

function App() {
  return (
    <ItemsState>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ItemsState>
  )
}

export default App
