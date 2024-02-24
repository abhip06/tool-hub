import { useNavigate } from "react-router-dom"


const ToolsComponent = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-wrap px-16 py-5 items-center flex-col gap-10 border-b-2 border-black ">
            <h1 className="text-5xl text-start">All Tools</h1>
            <div className="flex flex-wrap gap-5">
                <div
                    onClick={() => navigate("password-generator")}
                    className="tools flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Password Generator</span>
                </div>
                <div
                    onClick={() => navigate("bg-changer")}
                    className="tools flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Background Colour Changer</span>
                </div>
                <div
                    onClick={() => navigate("basic-counter")}
                    className="tools flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Basic Counter</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Calculator</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Currency Converter</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Currency Converter</span>
                </div>
                <div
                    className="flex p-10 border-2 text-violet-500 border-violet-500 rounded-lg justify-center items-center cursor-pointer hover:bg-violet-500 hover:text-white">
                    <span className="text-lg">Currency Converter</span>
                </div>
            </div>
        </div>
    )
}

export default ToolsComponent