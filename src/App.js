import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import WebTemplate from './WebTemplate'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CommingSoon from './Components/CommingSoon';
import './App.css'
function App() {
  return (
    <>
    <Router>
      <div>
         <Navbar />
         <Routes>
           <Route path='/' element={<WebTemplate />} />
           <Route path='*' element={<CommingSoon />} />
         </Routes>
         <Footer />
      </div>
    </Router>
    </>
  )
}

export default App