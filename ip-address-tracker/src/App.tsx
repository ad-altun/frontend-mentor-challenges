import Map from "./components/Map"
import SearchBar from "./components/SearchBar"
import ShowIpBar from "./components/ShowIpBar"

function App() {
  return (
    <div className="app-main">
      <SearchBar />
      <ShowIpBar />
      <Map />
    </div>
  )
}

export default App
