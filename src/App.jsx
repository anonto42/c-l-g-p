import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Naveber from './Components/Naveber/Naveber';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
    <Naveber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element />
        <Route path='/admin' element />
        <Route path='/login' element />
        <Route path='/register' element />
        <Route path='/user' element />
        <Route path='product' element />
         
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
