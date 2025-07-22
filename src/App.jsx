import { useState } from 'react'

import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import Coverpage from './pages/Coverpage'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'
import LayoutTwo from './layouts/LayoutTwo'

function App() {
    //  router start
    const myRouter = createBrowserRouter(createRoutesFromElements(
   
  //  first Route starts
 <Route>
  {/* Coverpage route start */}
 <Route path='/' element={<LayoutOne/>}>
    <Route index element={<Coverpage/>}/>
 </Route>
 {/* Coverpage route ends */}
 {/* Main route starts */}
 <Route path='/main' element={<LayoutTwo/>}> 
 <Route index element={<Home/>}/>
 </Route>
  {/* Main route starts */}

 </Route>
  //  first Route ends


    ))
    //  router end

  return (
    <>
    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
