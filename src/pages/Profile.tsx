import { useEffect, useState } from "react"


const Profile = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${import.meta.env.VITE_USER_NAME}`)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className="flex justify-center items-center gap-16 min-h-[700px] bg-violet-300 px-16">
            <div className="bg-violet-500 rounded-full p-2">
                <img src={data.avatar_url} alt="Avatar" width={300} height={300} className="rounded-full" />
            </div>

            <div
                className="flex gap-2 justify-center items-start flex-col bg-violet-500 text-white py-5 px-7 rounded-lg shadow-lg shadow-violet-200">
                <h3 className="text-lg">Name: {data.name}</h3>
                <h3 className="text-lg">Bio: {data.bio}</h3>
                <h3 className="text-lg">Followers: {data.followers}</h3>
                <h3 className="text-lg">Following: {data.following}</h3>
            </div>

        </div>
    )
}

export default Profile