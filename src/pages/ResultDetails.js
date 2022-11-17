import React, { useEffect, useState, useContext } from 'react'
// contexts
import ItemsContext from '../context/Items/ItemsContext'
// components
import ItemDetails from '../components/ItemDetails'
// react royter (v6)
import { useParams } from 'react-router-dom'

const ResultDetails = () => {
  const { id } = useParams()
  const { selectedItem, getItemDetails } = useContext(ItemsContext)
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData = async () => {
    try {
      await getItemDetails(id)
      // this is to not show old data and wait for the new ones (other solution?)
      setWaiting(false)
    } catch (error) {
      // TODO: handle errors
      console.log(error)
    }
  }

  return !waiting && selectedItem?.item ? (
    <div className="resultDetails_container">
      <ItemDetails data={selectedItem?.item} />
    </div>
  ) : null
}

export default ResultDetails
