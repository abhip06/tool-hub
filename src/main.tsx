import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Tools from './pages/Tools.tsx'
import Contact from './pages/Contact.tsx'
import Profile from './pages/Profile.tsx'
import PasswordGenerator from './components/PasswordGenerator.tsx'
import BgColorChanger from './components/BgColorChanger.tsx'
import BasicCounter from './components/BasicCounter.tsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

// Alternate method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="tools" element={<Tools />} >
          <Route path="password-generator" element={<PasswordGenerator />} />
          <Route path="bg-changer" element={<BgColorChanger />} />
          <Route path="basic-counter" element={<BasicCounter />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
