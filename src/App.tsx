import Header from './shared/header'
import Footer from './shared/footer'
import Home from './pages/Home/home'
import Aprende from './pages/Aprende/Aprende'
import Test from './pages/Test/Test'
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
        <Route path='/Test' element={<Test/>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
