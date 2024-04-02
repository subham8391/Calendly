import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import WebTemplate from './WebTemplate'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
function App() {
  return (
    <>
    <Router>
      <div>
         <Navbar />
         <Routes>
           <Route path='/' element={<WebTemplate />} />
         </Routes>
         <Footer />
      </div>
    </Router>
    </>
  )
}

export default App