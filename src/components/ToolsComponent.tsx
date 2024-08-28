import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import ThemeContext from "../context/ThemeContext";


const ToolsComponent = () => {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`flex px-16 py-20 items-center flex-col gap-10 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
            <h1 className={`text-3xl text-start ${theme === "dark" ? "text-white" : "text-gray-800"}`}>All Tools</h1>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <div
                    onClick={() => navigate("password-generator")}
                    className="tools flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Password Generator</span>
                </div>
                <div
                    onClick={() => navigate("bg-changer")}
                    className="tools flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Background Colour Changer</span>
                </div>
                <div
                    onClick={() => navigate("basic-counter")}
                    className="tools flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Basic Counter</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Calculator</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Currency Converter</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Currency Converter</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white w-[300px] h-[100px]">
                    <span className="text-lg">Currency Converter</span>
                </div>
            </div>
        </div>
    )
}

export default ToolsComponent