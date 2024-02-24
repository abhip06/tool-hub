
const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-10 h-screen py-10 px-16">
      <h1 className="text-5xl text-center text-gray-800">Contact Page</h1>
      <div className="flex flex-col justify-center items-start gap-5 bg-violet-500 border-2 border-violet-500 rounded-lg p-10">
        <input className="w-full rounded-lg overflow-hidden p-3 text-violet-500 text-lg" type="text" placeholder="Enter your name" />
        <input className="w-full rounded-lg overflow-hidden p-3 text-violet-500 text-lg" type="email" placeholder="Enter your email" />
        <textarea className="w-full rounded-lg overflow-hidden p-3 text-violet-500 text-lg" placeholder="Enter your message" cols={30} rows={10} />
        <button
          className="flex justify-center items-center py-2 px-4 rounded-lg text-lg text-white bg-violet-500 border-2 hover:border-violet-800 hover:bg-white hover:text-violet-800"
        >Submit</button>
      </div>
    </div>
  )
}

export default Contact