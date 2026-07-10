import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <div className="bg-black text-white">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
