import React from 'react'
import {useEffect , useState} from 'react'
const ResizeComponets = () => {
    const [windowWidth , setWindowWidth] =useState(window.innerWidth);
    
    useEffect (() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      console.log("Event listener Added") ;
      window.addEventListener('resize' , handleResize) ;
      return() =>
      {
        console.log ("Evetn Listener removed");
        window.removeEventListener("reaise" , handleResize);
      };
    } , []
  );
  return (
    <div>
        <h1>Window Width : {windowWidth}px</h1>

    </div>
  )
}

export default ResizeComponets