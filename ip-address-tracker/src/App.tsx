import { useState } from "react"
import Map from "./components/Map"
import SearchBar from "./components/SearchBar"
import ShowIpBar from "./components/ShowIpBar"

function App() {
  const [searchIp, setSearchIp] = useState('');

  const handleChange = (term: string) => {
    setSearchIp(term)
  }
  console.log(searchIp)

  return (
    <div className="app-main">
      <SearchBar onChange={handleChange} />
      <ShowIpBar />
      <Map />
    </div>
  )
}

export default App
