import './App.css'
import Dashboard from './Component/Dashboard/Dashboard'
import Login from './Component/Login/Login'
import Register from './Component/Registration/Register'

//create router
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//create router
const router =createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  } 
])

function App() {
  return (
  <div>
     <RouterProvider router={router}/>
  </div>
  )
}

export default App
