// TODO: improve code ?

const renderCategories = (items) => {
  if (items && items?.length !== 0) {
    // if there are no categories it returns null
    let categories = null

    if (items?.categories?.length > 1) {
      // first category
      categories = `${items.categories[0]} >`
      const arrayLenght = items.categories.length - 1
      
      // others
      for (let i = 1; i < arrayLenght; i++) {
        categories += ` ${items.categories[i]} >`
      }
      
      // the last
      categories += ` ${items.categories[arrayLenght]}`
    } else if (items?.categories?.length === 1) {

      // there is only one category
      categories = items.categories[0]
    }

    return <p>{categories}</p>
  }
}

export default renderCategories
