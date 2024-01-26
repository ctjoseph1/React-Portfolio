import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
function App() {

  return (
    <BrowserRouter>
    <Link to = "/" >Home</Link>
    <Link to = "/projects" >Projects</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
