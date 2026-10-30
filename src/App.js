import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import ScrollTop from './Components/ScrollTop';


function App() {
  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </Router>
  );
}

export default App;
