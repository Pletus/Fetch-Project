import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/navbar';
import OneResult from './components/OneResult' ;

function App() {
  const [search, setSearch] = useState({});



  return (
    <>
      <Navbar />

      {/* Body section */}
      <OneResult />

    </>
  )
}

export default App
