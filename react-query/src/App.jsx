import {createBrowserRouter} from 'react-router-dom'
import './App.css'
import { MainLayout } from './componets/Layout/MainLayout';
import Home from './Pages/Home';
import { FetchOld } from './Pages/FetchOld';
import { FetchRQ } from './Pages/FetchRQ'; 
import { RouterProvider } from 'react-router-dom';
import {QueryclientProvider} from '@tanstack/react-query';
const router = createBrowserRouter([
  {path : '/',
  element: <MainLayout />, 
  children: [{ 
    path : '/' ,
    element :<Home/>,
  },
  {
    path:'/trad',
    element : <FetchOld/>,
  },
  {
    path : '/rq' ,
    element : <FetchRQ/>,
  },
],
},
]);
const App = () => {
const queryClient = new Queryclient();

  return( <QueryclientProvider client = {queryClient}>
  <RouterProvider router={router}>
     
  </RouterProvider>
  </QueryclientProvider>
  );
  
};
export default App;

