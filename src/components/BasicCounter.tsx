import { useContext, useState } from "react"
import ThemeContext from "../context/ThemeContext";

const BasicCounter = () => {

    let [counter, setCounter] = useState(0);

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`h-[calc(100vh-80px)] flex flex-wrap items-center justify-center gap-5 flex-col p-10 text-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
            <h1 className="text-5xl my-3">Basic Counter App</h1>
            <p className="text-xl">Counter : {counter}</p>
            <div className="flex my-10 gap-5">
                <button
                    className="px-5 py-3 bg-white rounded-lg text-black border border-gray-500 cursor-pointer hover:bg-gray-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    onClick={() => setCounter(prev => prev + 1)}
                    disabled={counter > 99}
                >
                    Add
                </button>
                <button
                    className="px-5 py-3 bg-white rounded-lg text-black border border-gray-500 cursor-pointer hover:bg-gray-500"
                    onClick={() => setCounter(0)}
                >
                    Reset
                </button>
                <button
                    className="px-5 py-3 bg-white rounded-lg text-black border border-gray-500 cursor-pointer hover:bg-gray-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    onClick={() => setCounter(prev => prev - 1)}
                    disabled={counter < 1}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default BasicCounter