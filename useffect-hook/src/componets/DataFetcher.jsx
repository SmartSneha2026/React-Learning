import React from 'react'
import {useEffect,useState} from 'react'
function DataFetcher() {
 const [data , setData] =useState([]);
 const [loading , setLoading] = useState(true);
 
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(data => {
    setData(data);
    setLoading(false);
  });

 }, []);
  return (
   

    <div>
       {
        loading ? (
          <h1> Loading....</h1>

        ): (
          <ul>
            {data.map(post => (
              <li key ={post.id} ></li>
            ))}
          </ul>
        )
       }
    </div>
  )
}

export default DataFetcher