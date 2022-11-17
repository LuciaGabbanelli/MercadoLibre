import React, { useEffect, useState, useContext } from 'react'
import _isEmpty from 'lodash/isEmpty'
// contexts
import ItemsContext from '../context/Items/ItemsContext'
// components
import ItemsList from '../components/ItemsList'
// react royter (v6)
import { useSearchParams } from 'react-router-dom'

const SearchResult = () => {
  const [searchParams] = useSearchParams()
  const { items, getItemsList } = useContext(ItemsContext)
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const getData = async () => {
    try {
      await getItemsList(searchParams.get('q'))
      // this is to not show old data and wait for the new ones (other solution?)
      setWaiting(false)
    } catch (error) {
      // TODO: handle errors
      console.log(error)
    }
  }

  return (
    <>
      {!waiting && !_isEmpty(items?.items) ? <ItemsList data={items} /> : null}
    </>
  )
}

export default SearchResult
