import React from 'react'
// components
import Header from '../components/Header'
import CategoriesBar from '../components/CategoriesBar'

const Layout = ({ children }) => {
  return (
    <div className="layout_container">
      <Header />
      <CategoriesBar />
      <div className="layout_content">{children}</div>
    </div>
  )
}

export default Layout
