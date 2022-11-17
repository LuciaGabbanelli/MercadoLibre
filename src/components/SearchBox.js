import React, { useState, useEffect } from 'react'
// react router (v6)
import { Link, useSearchParams } from 'react-router-dom'
// img
import img from '../assets/ic_Search.png'

const SearchBox = () => {
  const [value, setValue] = useState('')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    // product search by url is displayed in SearchBox
    if (searchParams.get('q')) setValue(searchParams.get('q'))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form className="searchBox_form">
      <input
        type="text"
        value={value}
        className="searchBox_input"
        placeholder="Nunca dejes de buscar"
        onChange={handleChange}
      />
      <Link
        to={{
          pathname: '/items/search',
          search: `?q=${value}`,
        }}
      >
        <button type="submit" value="Submit" className="searchBox_button">
          <img alt="Lupa" src={img} />
        </button>
      </Link>
    </form>
  )
}

export default SearchBox
