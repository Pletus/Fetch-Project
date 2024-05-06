import "../App.css";
import React, { useState, useEffect } from "react";

function OneResult({ results, setResults }) {
  //     const [listings, setListings] = useState([]);

  //  useEffect(() => {
  //         const fetchData = async () => {
  //           try {
  //             const response = await fetch('https://hn.algolia.com/api/v1/search');
  //             const data = await response.json();
  //             setListings(data.hits);
  //             } catch (error) {
  //                 console.error('Error fetching data:', error);
  //             }
  //             };
  //             fetchData();
  //         }, []);

  //   return (
  //     <div className='lilisting'>
  //       <div>
  //         <ul className='block'>
  //           {listings.map((listing) => {
  //             return (
  //               <li key={listing.title}>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  


  
 

  return (
    <div className='lilisting'>
      <ol className='list-inside list-decimal mr-4'>
        {results.map((lilisting) => (
          <li className='lilisting' key={lilisting.objectID}>
            <a href={lilisting.url} target='_blank' rel='noopener noreferrer'>
              {lilisting.title}
            </a>
            <p>Source URL: {lilisting.url}</p>
            <p>Points: {lilisting.points}</p>
            <p>Author: {lilisting.author}</p>
            <p>Time: {lilisting.created_at}</p>
            <p>Comments: {lilisting.num_comments}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default OneResult;
