import React from 'react'
// context
import ItemsState from './context/Items/ItemsState'
// routes
import { BrowserRouter } from 'react-router-dom'
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
