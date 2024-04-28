import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoURL, geoAPIoptions } from '../../Api.jsx'

function Search({onSearchChange}) {

  const [search, setSearch] = useState(null)

  const loadOptions = (inputValue) => {
    return (
      fetch(`${geoURL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIoptions).then(response => response.json()).then(response => console.log(response)).catch(err => console.log(err))
    )
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate 
      placeholder="Search for city"
      debouceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />

  )
}

export default Search