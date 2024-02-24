import data from "../data.json"

import bgImg from "../assets/avatar-img.jpg"

const Card = () => {
    return (
        <>
            {
                data.products.map((item) => (

                    <div className="flex flex-col justify-center items-start gap-10 max-w-[500px] border-2 border-gray-500 rounded-lg p-5" key={item.id}>
                        <img src={bgImg} alt="bg Image" width={300} height={300} className="rounded-lg" />
                        <div className="flex flex-col justify-center items-start gap-5 text-sm">
                            <p className="text-lg font-bold">{item.title}</p>
                            <p>Price : {item.price}</p>
                            <p>Category : {item.category}</p>
                            <p>Stock : {item.stock}</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Card