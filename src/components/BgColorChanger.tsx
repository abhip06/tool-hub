import { useState } from 'react'

const BgColorChanger = () => {

    let [color, setColor] = useState("white")

    return (
        <div className={`h-screen flex felx-wrap items-center justify-between flex-col px-5 py-12 bg-${color}`}>
            <h1 className={`text-5xl font-bold ${color === "black" ? "text-white" : "text-gray800"}`}>Background Colour Changer</h1>
            <div className="flex flex-wrap bg-white items-center justify-center rounded-lg gap-5 p-5">
                <button className="p-5 text-white bg-red-600 rounded-xl"
                    onClick={() => setColor("red-600")}
                >Red</button>
                <button className="p-5 text-white bg-cyan-500 rounded-xl"
                    onClick={() => setColor("cyan-500")}
                >Blue</button>
                <button className="p-5 text-white bg-green-500 rounded-xl"
                    onClick={() => setColor("green-500")}
                >Green</button>
                <button className="p-5 text-white bg-black rounded-xl"
                    onClick={() => setColor("black")}
                >Black</button>
                <button className="p-5 text-black bg-white rounded-xl border"
                    onClick={() => setColor("white")}
                >White</button>
                <button className="p-5 text-white bg-gray-500 rounded-xl"
                    onClick={() => setColor("gray-500")}
                >Gray</button>
                <button className="p-5 text-white bg-lime-500 rounded-xl"
                    onClick={() => setColor("lime-500")}
                >Lime</button>
                <button className="p-5 text-white bg-violet-700 rounded-xl"
                    onClick={() => setColor("violet-700")}
                >Voilet</button>
                <div className=""></div>
            </div>
        </div>
    )
}

export default BgColorChanger