import { useState } from "react"

const BasicCounter = () => {

    let [counter, setCounter] = useState(0);

    return (
        <div className="h-[500px] flex flex-wrap items-center justify-center gap-5 flex-col bg-violet-500 text-white p-10 text-center">
            <h1 className="text-5xl my-3">Basic Counter App</h1>
            <p className="text-xl">Counter : {counter}</p>
            <div className="flex my-10 gap-5">
                <button className="p-4 bg-white rounded-lg text-black cursor-pointer hover:bg-gray-300"
                    onClick={() => setCounter(counter + 1)}
                    disabled={counter > 19}
                >Add</button>
                <button className="p-4 bg-white rounded-lg text-black cursor-pointer hover:bg-gray-300"
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter < 1}
                >Remove</button>
            </div>
        </div>
    )
}

export default BasicCounter