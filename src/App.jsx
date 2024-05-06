import { useState, useEffect } from 'react';
import './App.css'
import './index.css';
import Navbar from './components/navbar';
import OneResult from './components/OneResult' ;
import Post from './components/post';

function App() {

  const [search, setSearch] = useState("");
  const [news, setNews] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://hn.algolia.com/api/v1/search');
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${search}`);
        const data = await response.json();
        setResults(data.hits); // Assuming the response data is an array of results
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]); // Empty dependency array to run only once when the component mounts

 
  const handleInputChange = (event) => {
    setSearch(event.target.value);
    
  };




  return (
    <>
      <Navbar search={search} setSearch={setSearch} handleInputChange={handleInputChange}/>
      

      {/* Body section */}
      <OneResult results={results} setResults={setResults}/>


    {/* <Post/> */}
    </>

  )
}

export default App;
