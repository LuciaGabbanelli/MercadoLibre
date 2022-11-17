import React from 'react'
import CategoriesBar from '../components/CategoriesBar'
// components
import Header from '../components/Header'

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
