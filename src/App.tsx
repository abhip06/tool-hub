import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import PasswordGenerator from "./components/PasswordGenerator"
import Layout from "./Layout"
import Home from "./pages/Home"
import Tools from "./pages/Tools"
import BgColorChanger from "./components/BgColorChanger"
import BasicCounter from "./components/BasicCounter"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"

function App() {

  // Alternate method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="tools" element={<Tools />} />
          <Route path="password-generator" element={<PasswordGenerator />} />
          <Route path="bg-changer" element={<BgColorChanger />} />
          <Route path="basic-counter" element={<BasicCounter />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
    </Route>
  )
)

  return (
    <RouterProvider router={router} />
  )
}

export default App
