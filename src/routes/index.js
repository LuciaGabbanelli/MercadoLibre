import React from 'react'
// components
import Layout from '../layout/Layout'
// pages
import SearchResult from '../pages/SearchResult'
import ResultDetails from '../pages/ResultDetails'
// react router (v6)
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Layout />} />
      <Route
        path="/items/search"
        element={
          <Layout>
            <SearchResult />
          </Layout>
        }
      />
      <Route
        path="/items/:id"
        element={
          <Layout>
            <ResultDetails />
          </Layout>
        }
      />
      {/* TODO: improve style */}
      <Route path="*" element={<h3>404</h3>}></Route>
    </Routes>
  )
}

export default AppRoutes
