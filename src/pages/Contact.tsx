import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col items-center gap-7 h-[calc(100vh-80px)]  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <h1 className="text-5xl text-center">Contact Us</h1>
      <div className="flex flex-col justify-center items-start gap-7 rounded-lg p-10">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm text-violet-500">Full Name</label>
          <input className="w-full bg-transparent rounded-lg overflow-hidden p-3 ring-2 ring-violet-500 text-lg" type="text" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm text-violet-500">Email</label>
          <input className="w-full bg-transparent rounded-lg overflow-hidden p-3 ring-2 ring-violet-500 text-lg" type="email" placeholder="Enter your email" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-violet-500">Message</label>
          <textarea
            className="w-full bg-transparent rounded-lg overflow-hidden p-3 ring-2 ring-violet-500 text-lg"
            placeholder="Enter your message"
            cols={30}
            rows={5}
          />
        </div>
        <button
          className="flex justify-center items-center py-2 w-full rounded-lg text-lg text-white bg-violet-500 border-2 hover:border-violet-800 hover:bg-white hover:text-violet-800"
        >Submit</button>
      </div>
    </div>
  )
}

export default Contact