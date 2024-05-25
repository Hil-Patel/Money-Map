/* eslint-disable no-unused-vars */

import './App.css'
import '../assets/css/style.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/SignUp',
      element:<SignUp/>
    },
    {
      path:'/history',
      element:<h1>history</h1>
    },
    {
      path:'/home',
      element:<Home/>
    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
