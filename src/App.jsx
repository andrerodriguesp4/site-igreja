import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import './index.css'
import Avisos from './pages/Avisos'
import Home from './pages/Home'
import MotivosOracao from './pages/MotivosOracao'
import Contato from './pages/Contato'
import Reunioes from './pages/Reunioes'
import logo from './components/logo.png'
import Buttonnavbar from './components/Buttonnavbar'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className='bg-green-800 text-white px-6 py-4 flex justify-center items-center gap-6 shadow-md'>
      <div className='absolute left-4 flex'>
        <img src={logo} alt='Logo' className='h-12' title='Igreja Presbiteriana de Passa Quatro' />
      </div>
      <Buttonnavbar onClick={() => navigate('/')} >Início</Buttonnavbar>
      <Buttonnavbar onClick={() => navigate('/avisos')} >Avisos</Buttonnavbar>
      <Buttonnavbar onClick={() => navigate('/motivos-oracao')} >Motivos de Oração</Buttonnavbar>
      <Buttonnavbar onClick={() => navigate('/reunioes')}>Reuniões</Buttonnavbar>
      <Buttonnavbar onClick={() => navigate('/contato')}>Contato</Buttonnavbar>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className='w-screen h-screen bg-slate-100'>
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
