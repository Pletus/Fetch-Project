import '../App.css';
import React, { useState, useEffect } from 'react';

function OneResult() {
    const [listings, setListings] = useState([]);
    //   {
    //     title:'xyz',
    //     url: 'popcornlinux.org',
    //     points: '2 points',
    //     author: 'msadowski',
    //     time: '10 minutes ago',
    //     comments: '5 comments',
    //       },
    // ]);
    
    // const url = 'http://hn.algolia.com/api/v1/items/:id'; 

 useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://hn.algolia.com/api/v1/search');
            const data = await response.json();
            setListings(data.hits);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };
            fetchData();
        }, []);
    
    
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
          <ul>
            {listings.map((lilisting) => (
              <li key={lilisting.objectID}>
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
          </ul>
        </div>
      );
    }


export default OneResult;