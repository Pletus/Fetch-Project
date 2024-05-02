import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Post from './components/post';
function App() {
  const [search, setSearch] = useState({});



  return (
    <>
    <Navbar />

    {/* Body section */}


    <Post/>
    </>

  )
}

export default App;
