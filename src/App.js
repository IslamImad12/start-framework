import React from 'react'
import './App.css';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Portfolio from './Component/Portfolio.jsx';
import Contact from './Component/Contact.jsx';
import Navbar from './Component/Navbar.jsx';
import { HashRouter, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Component/Layout.jsx';
import NotFound from './Component/NotFound.jsx';
import style from './style.module.css'
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'



// let routers = createHashRouter([
//   {path:'',element:<Layout></Layout> , children:[
//     {index:true, element:<Home></Home>},
//     {path:'home',element:<Home></Home>},
//     {path:'about',element:<About></About>},
//     {path:'portfolio',element:<Portfolio></Portfolio>},
//     {path:'contact',element:<Contact></Contact>},
//     {path:'*',element:<NotFound></NotFound>},
//   ]},
// ])
let routers = createBrowserRouter([
  {path:'',element:<Layout></Layout> , children:[
    {index:true, element:<Home></Home>},
    {path:'home',element:<Home></Home>},
    {path:'about',element:<About></About>},
    {path:'portfolio',element:<Portfolio></Portfolio>},
    {path:'contact',element:<Contact></Contact>},
    {path:'*',element:<NotFound></NotFound>},
  ]},
])

export default function App() {
  return (
    <>
    <RouterProvider router={routers} ></RouterProvider>
    {/* <HashRouter router={routers} ></HashRouter> */}
    </>
    )
  }


