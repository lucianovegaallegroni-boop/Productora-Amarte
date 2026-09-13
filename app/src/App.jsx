import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import MisionYVision from './pages/MisionYVision'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mision-y-vision" element={<MisionYVision />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
