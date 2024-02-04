import { IoCloseSharp } from "react-icons/io5";

export default function ProductPreview({ product }) {
    return (
        <>
            <div className="w-[80vw] h-[80vh] bg-tiles p-5 rounded-lg">
                <div className="w-full flex justify-end">
                    <IoCloseSharp className="scale-150 text-orange-300 hover:text-orange-500 hover:cursor-pointer" />
                </div>
                <div className="w-full flex justify-between px-5">
                    <h1 className="text-5xl">{product.name}</h1>
                    <p className="text-2xl grid place-items-end">{product.cost}</p>
                </div>
                <div className="w-full h-[90%] pt-2 flex justify-between">
                    <div className="grid place-items-center">
                        <img src={product.image} alt={product.name} className="object-cover w-[60%] h-[60%]" />
                    </div>
                    <div className="h-[97%] w-0.5  bg-white"></div>
                    <div className="grid place-items-center">
                        <p className="h-[80%] overflow-auto mx-7 my-3">{product.description}</p>
                        <button className="bg-prim-color text-prim-font-color p-2 rounded-lg hover:bg-amber-500 hover:text-sec-font-color">Negotiate</button>
                    </div>
                </div>
            </div>
        </>
    )
}