import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const btnValues = [
    ["AC", "DEL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
]

const Calculator = () => {
    const { theme } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState<string>("");
    const [secondaryInput, setSecondaryInput] = useState<string>("");

    const changeBtnDesign = (btn: string) => {
        if (btn === "+") {
            return `row-span-2 ${theme === "dark" ? "bg-green-500 hover:bg-green-400" : "bg-green-200 hover:bg-green-100"}`;
        } else if (btn === "=") {
            return `${theme === "dark" ? "bg-blue-500 hover:bg-blue-400" : "bg-blue-200 hover:bg-blue-100"}`;
        } else if (btn === "*" || btn === "-" || btn === "/") {
            return `${theme === "dark" ? "bg-green-500 hover:bg-green-400" : "bg-green-200 hover:bg-green-100"}`;
        } else if (btn === "DEL" || btn === "AC" || btn === "%") {
            return `${theme === "dark" ? "bg-yellow-500 hover:bg-yellow-400" : "bg-yellow-200 hover:bg-yellow-100"}`;
        } else {
            return `${theme === "dark" ? "bg-violet-500 hover:bg-violet-400" : "bg-violet-200 hover:bg-violet-100"}`;
        }
    }

    const handleBtnClick = (value: string) => {

        if (value !== "DEL" && value !== "AC" && value !== "=") {
            setInputValue((prev) => prev + value);
        }

        if (value === "DEL") {
            setInputValue(inputValue.slice(0, -1));
        } else if (value === "AC") {
            setInputValue("");
            setSecondaryInput("");
        } else if (value === "=") {
            setSecondaryInput(inputValue);
            setInputValue(eval(inputValue));
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center h-[calc(100vh-80px)] gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
            <h2 className="text-4xl">Simple Calculator</h2>
            <div className="w-full md:w-1/3 flex flex-col gap-4 justify-center items-center p-5 rounded-md bg-violet-50 shadow-lg">
                <div className={`w-full flex flex-col rounded-md ring-2 ring-violet-500 px-3 py-2 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                    <input
                        type="text"
                        value={secondaryInput}
                        readOnly
                        dir="rtl"
                        className={`${secondaryInput ? "block" : "hidden"} outline-none overflow-hidden text-right text-base bg-transparent`}
                    />
                    <input
                        type="text"
                        dir="rtl"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="outline-none overflow-hidden text-right text-5xl bg-transparent placeholder-current"
                        placeholder="0"
                    />
                </div>
                <div className="grid grid-cols-4 gap-4 w-full">
                    {
                        btnValues.flat().map((btn, index) => (
                            <button
                                key={index}
                                onClick={() => handleBtnClick(btn)}
                                className={`rounded-md ${changeBtnDesign(btn)} p-4 font-semibold flex items-center justify-center text-xl border-none`}
                            >
                                {btn}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Calculator