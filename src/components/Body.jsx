import React from 'react'
import Login from './Login'
import Browse from './Browse'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Body = () => {

    const appRouther =createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouther}/>
        </div>
  )
}

export default Body