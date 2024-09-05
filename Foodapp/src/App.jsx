import { BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
    <div>

      <div className="app">
        <Navbar/>
      </div>
    </div>
    <Router>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}

      </Routes>
    </Router>
    </>
  )
}

export default App
