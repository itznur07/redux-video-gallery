import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Video from "./pages/video"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Video />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
