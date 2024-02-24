import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

  return (
    <div className="font-sans flex flex-wrap px-16 py-3 justify-between items-center shadow-2xl">
      <Link to="/">
      <div className="flex">
        <span className="text-4xl font-bold text-gray-800">Tools</span>
        <span className="text-4xl font-bold text-violet-500">Hub</span>
      </div>
      </Link>
      <ul className="text-lg text-gray-800 flex gap-7">
        <NavLink 
        to="/" 
        className={({isActive}) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : "text-gray-800"}`}
        >Home
        </NavLink>
        <NavLink 
        to="/tools" 
        className={({isActive}) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : "text-gray-800"}`}
        >Tools
        </NavLink>
        <NavLink 
        to="/about" 
        className={({isActive}) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : "text-gray-800"}`}
        >About
        </NavLink>
        <NavLink 
        to="/contact" 
        className={({isActive}) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : "text-gray-800"}`}
        >Contact us
        </NavLink>
        <NavLink 
        to="/profile" 
        className={({isActive}) => `cursor-pointer hover:text-violet-500 ${isActive ? "text-violet-500" : "text-gray-800"}`}
        >My Profile
        </NavLink>
      </ul>
      <div className="flex gap-5">
        <button
          className="flex justify-center items-center py-2 px-4 rounded-lg text-lg text-white bg-violet-500 border-2 hover:border-violet-800 hover:bg-white hover:text-violet-800">
          Sign In
        </button>
        <button
          className="flex justify-center items-center py-2 px-4 rounded-lg text-lg text-violet-500 border-2 border-violet-500 hover:bg-violet-500 hover:text-white">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar