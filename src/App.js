import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

import ShieldedMetalArc from './pages/ShieldedMetalArc/ShieldedMetalArc'
import GasTungsten from './pages/GasTungsten/GasTungsten'

import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Product from './pages/Product/Product'
import Info from './pages/Info/Info'
import Services from './pages/Services/Services'

import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h1>Shree Ganesh</h1> */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/product"
            element={<Product />}
          />
          <Route
            path="/info"
            element={<Info />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/card"
            element={<Card />}
          />
          <Route
            path="/shielded-metal-arc"
            element={<ShieldedMetalArc />}
          />
          <Route
            path="/gas-tungsten"
            element={<GasTungsten />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
