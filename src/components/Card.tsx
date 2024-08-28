import data from "../data.json"

import bgImg from "../assets/avatar-img.jpg"

const Card = () => {
    return (
        <>
            {
                data.products.map((item) => (

                    <div
                        className="flex flex-col justify-center items-start gap-10 max-w-[500px] border border-gray-500 rounded-lg hover:cursor-pointer hover:shadow-lg pb-5"
                        key={item.id}
                    >
                        <img
                            src={bgImg}
                            alt="bg Image"
                            width={300}
                            height={300}
                            className="rounded-t-lg"
                        />
                        <div className="flex flex-col justify-center items-start gap-5 text-sm  px-5">
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