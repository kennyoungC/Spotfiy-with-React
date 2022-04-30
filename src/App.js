import "./App.css"
import LoginPage from "./Components/LoginPage"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import AlbumPage from "./Components/AlbumPage"
import ArtistPage from "./Components/ArtistPage"
import { useState } from "react"
function App() {
  const [name, setName] = useState("")
  const handleNameInput = (e) => {
    setName(e.target.value)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<LoginPage name={name} funcName={handleNameInput} />}
          />
          <Route path="/home" element={<Home userName={name} />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
