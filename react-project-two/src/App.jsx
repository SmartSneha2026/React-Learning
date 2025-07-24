
import UserCard from "./components/UserCard"
import sneha1 from './assets/sneha1.jpeg'
import mr from './assets/mr.jpeg'
import mrs from './assets/mrs.jpeg'
import './App.css'
function App() {


  return (
    <div className="container" style= {{"border-radius": "10px"}}>
      <UserCard name="Sneha Prajapati" desc="desc1" image={sneha1} style= {{"border-radius": "10px "}}/>
      <UserCard name="Mr. Ramesh Chandra Prajapati" desc="desc2" image={mr} style= {{"border-radius": "10px ",}}/>
      <UserCard name="Mrs. Sangita Prajapati" desc="desc3" image={mrs} style= {{"border-radius": "10px"}}/>
    </div>
  )
}

export default App
