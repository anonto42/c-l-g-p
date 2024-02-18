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
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
