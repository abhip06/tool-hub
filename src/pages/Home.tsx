import { useContext } from "react"
import bgImg from "../assets/avatar-img.jpg"
import Card from "../components/Card"
import ToolsComponent from "../components/ToolsComponent"
import ThemeContext from "../context/ThemeContext"


const Home = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <div className={`flex flex-wrap px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-5 justify-between items-center gap-16 min-h-[700px] ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white"}`}>
                <div className="flex flex-1 flex-col gap-10 justify-center items-start">
                    <h1 className={`${theme === "dark" ? "text-white" : "text-gray-800"} text-7xl font-bold`}>Welcome to Tools Hub.</h1>
                    <p className={`${theme === "dark" ? "text-white": "text-gray-600"} text-lg`}>A Platform where you will find various types of tools. Explore all the tools that requires in day-to-day life at one place. You will not need to find each tools seperately.</p>
                    <button className="text-white rounded-lg px-5 py-3 font-bold text-base bg-violet-500 border-2 hover:bg-white hover:border-violet-500 hover:text-violet-500">Explore now &rarr; </button>
                </div>
                <div className="flex-1">
                    <img src={bgImg} alt="hero img" width={700} height={700} />
                </div>
            </div>
            <hr />
            {/* <div className="flex flex-wrap justify-center w-full gap-5 px-16 py-10">
                <Card />
            </div> */}
            <ToolsComponent />
        </>
    )
}

export default Home