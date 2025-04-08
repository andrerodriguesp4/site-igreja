import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Avisos from './pages/Avisos'
import Home from './pages/Home'
import MotivosOracao from './pages/MotivosOracao'
import Contato from './pages/Contato'
import Reunioes from './pages/Reunioes'
import logo from './components/logo.png'
import Buttonnavbar from './components/css/Buttonnavbar'

function Navbar() {

  return (
    <nav className='bg-green-800 text-white px-6 py-4 flex justify-center items-center gap-6 shadow-md'>
      <div className='absolute left-4 flex'>
        <img src={logo} alt='Logo' className='h-12' title='Igreja Presbiteriana de Passa Quatro' />
      </div>
      <Buttonnavbar to="/">Início</Buttonnavbar>
      <Buttonnavbar to="/avisos">Avisos</Buttonnavbar>
      <Buttonnavbar to="/motivos-oracao">Motivos de Oração</Buttonnavbar>
      <Buttonnavbar to="/reunioes">Reuniões</Buttonnavbar>
      <Buttonnavbar to="/contato">Contato</Buttonnavbar>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className='w-full'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/avisos' element={<Avisos />} />
          <Route path='/motivos-oracao' element={<MotivosOracao />} />
          <Route path='/reunioes' element={<Reunioes />}/>
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
