import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"


const Navbar = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div className={`font-sans flex flex-wrap px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 h-[80px] justify-between items-center shadow-lg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <Link to="/">
        <div className="flex">
          <span className="text-3xl font-bold">Tools</span>
          <span className="text-3xl font-bold text-violet-500">Hub</span>
        </div>
      </Link>
      <ul className="text-base flex gap-7">
        <NavLink
          to="/"
          className={({ isActive }) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : ""}`}
        >Home
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : ""}`}
        >Tools
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : ""}`}
        >About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : ""}`}
        >Contact us
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : ""}`}
        >My Profile
        </NavLink>
      </ul>
      <div className="flex gap-5">
        <button
        onClick={handleThemeChange}
          className="flex justify-center items-center p-2 rounded-md text-sm text-white bg-gray-500 border-2 hover:bg-white hover:text-gray-800">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <button
          className="flex justify-center items-center px-3 py-2 rounded-lg text-sm text-white bg-violet-500 border-2 hover:border-violet-800 hover:bg-white hover:text-violet-800">
          Sign In
        </button>
        <button
          className="flex justify-center items-center px-3 py-2 rounded-lg text-sm text-violet-500 border-2 border-violet-500 hover:bg-violet-500 hover:text-white">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar