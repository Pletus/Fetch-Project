import { useState, useEffect } from 'react';
import './App.css'
import './index.css';
import Navbar from './components/navbar';
import OneResult from './components/OneResult' ;
import Post from './components/post';

function App() {
  const [search, setSearch] = useState([]);
  const [news, setNews] = useState({});

  return (
    <>
      <Navbar />
      

      {/* Body section */}
      <OneResult />


    <Post/>
    </>

  )
}

export default App;
