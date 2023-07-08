import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h1>Shree Ganesh</h1> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
