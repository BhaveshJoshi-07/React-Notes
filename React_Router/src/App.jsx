import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path: "",
        element : <Home />
      }, 
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      }
    ]
  }
]);
 
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
