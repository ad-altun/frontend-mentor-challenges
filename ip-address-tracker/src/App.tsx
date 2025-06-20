import Map from "./components/Map"
import SearchBar from "./components/SearchBar"
import ShowIpBar from "./components/ShowIpBar"

function App() {
  return (
    <div className="app-main">
      <div className="test">
        <SearchBar />
        <div className="deneme">
          <ShowIpBar />
        </div>
      </div>
      <Map />
    </div>
  )
}

export default App
