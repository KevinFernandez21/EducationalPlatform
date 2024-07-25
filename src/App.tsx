import Header from './shared/header'
import Footer from './shared/footer'
import Home from './pages/Home/home'
import Aprende from './pages/Aprende/aprende'
import Books from './pages/otherpages/books'
import Nosotros from './pages/otherpages/nosotros'
import Practica from './pages/otherpages/practica'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Aprende' element={<Aprende/>} />
        <Route path='/Books' element={<Books/>}></Route>
        <Route path='/Practica' element={<Practica/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
