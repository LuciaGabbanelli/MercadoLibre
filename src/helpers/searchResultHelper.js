const renderCategories = (items) => {
  if (items && items?.length !== 0) {
    // si no hay categorías devuelve null
    let categories = null

    if (items?.categories?.length > 1) {
      // primer categoría
      categories = `${items.categories[0]} >`
      const arrayLenght = items.categories.length - 1
      
      // las restantes
      for (let i = 1; i < arrayLenght; i++) {
        categories += ` ${items.categories[i]} >`
      }
      
      // la última
      categories += ` ${items.categories[arrayLenght]}`
    } else if (items?.categories?.length === 1) {

      // hay una sola categoría
      categories = items.categories[0]
    }

    return <p>{categories}</p>
  }
}

export default renderCategories
