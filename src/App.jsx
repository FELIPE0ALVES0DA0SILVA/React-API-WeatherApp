import './App.css'
import Search from './Components/Search/Search.jsx'

function App() {


  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}></Search>
    </div>
  )
}

export default App
