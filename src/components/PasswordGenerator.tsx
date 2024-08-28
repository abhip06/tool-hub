import { useCallback, useContext, useEffect, useRef, useState } from "react"
import ThemeContext from "../context/ThemeContext"

const PasswordGenerator = () => {

    const {theme} = useContext(ThemeContext);

    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [numInclude, setNumInclude] = useState(false)
    const [charInclude, setCharInclude] = useState(false)

    // useRef hook
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let generatedPassword = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numInclude) str += "0123456789"
        if (charInclude) str += "!@#$_%-&^"

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length)
            generatedPassword += str.charAt(char)
        }

        setPassword(generatedPassword)
    }, [length, numInclude, charInclude, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        (passwordRef.current as any)?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numInclude, charInclude, passwordGenerator])

    return (
        <div className={`h-[calc(100vh-80px)] flex flex-wrap flex-col justify-center items-center ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
            <div className="flex flex-wrap flex-col justify-center items-center bg-violet-500 p-10 rounded-xl gap-10">
                <h1 className="text-5xl text-white">Password Generator</h1>
                <div className="flex bg-white rounded-lg p-1 w-full">
                    <input
                        type="text"
                        className="w-full text-xl border-none outline-none"
                        value={password}
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        className="p-3 rounded-lg bg-violet-500 text-white text-lg hover:bg-violet-800"
                        onClick={copyPasswordToClipboard}
                    >
                        Copy
                    </button>
                </div>
                <div className="flex text-white text-lg">
                    <input
                        type="range"
                        min={8}
                        max={64}
                        value={length}
                        className="mr-2"
                        onChange={(e) => { setLength(Number(e.target.value)) }}
                    />
                    <span>Length: {length}</span>
                    <input
                        type="checkbox"
                        className="ml-7 mr-2"
                        onClick={() => setNumInclude((prev) => !prev)}
                    />
                    <label>Numbers</label>
                    <input
                        type="checkbox"
                        className="ml-7 mr-2"
                        onClick={() => setCharInclude((prev) => !prev)}
                    />
                    <label>Special Characters</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator