
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
/*
//step1: Create a Context        
 const UserContext = createContext();

//Step2 : wrap all the child inside the provider
// step3 : pass value
*/
const UserContext = createContext();
const ThemeContext =createContext() ;
function App() {
 const [user, setUser] = useState({name : ' Love'} ) 
    const  [theme ,  setTheme] =useState('light') ;
  return (

    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div id='container' style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
     
  /*
  <>
      <UserContext.Provider value={user}>

        <ChildA/>
      </UserContext.Provider>
     </>
  */

  )
}

export default App
export {UserContext}
export {ThemeContext}