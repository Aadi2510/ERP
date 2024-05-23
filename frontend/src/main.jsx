import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signin from './components/Signin.jsx'
import Student from './components/Student.jsx'
import Teacher from './components/Teaher.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
 <Route path='/' element={<App/>}>
  <Route path='' element={<Signin/>}/>
  <Route path='/student' element={<Student/>}/>
  <Route path='/teacher' element={<Teacher/>}/>
 </Route>
    </>

    
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
