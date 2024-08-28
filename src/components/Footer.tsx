

const Footer = () => {
    return (
        <div className="flex flex-wrap flex-col bg-gray-900 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 text-white justify-center bottom-0">
            <div className="flex gap-2 flex-col mb-10">
                <div className="text-4xl font-bold">
                    <span>Tools</span><span className="text-violet-500">Hub</span>
                </div>
               <p className="text-sm">Tools for your daily use at one place.</p>
            </div>
            <hr className="bg-white my-5" />
            <span className='text-base text-center'>&copy; 2024 - Tools Hub - All rights reserved.</span>
        </div>
    )
}

export default Footer