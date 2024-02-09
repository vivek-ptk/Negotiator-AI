
import { useEffect, useRef} from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function ProductPreview({ product, onClose, brief }) {

    let previewRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (previewRef.current && !previewRef.current.contains(event.target)) {
                onClose();
            }
        })
    })

    const descriptionHeight = brief ? '83%' : '60%'
    // const briefWidth = brief ? "w-1/2" : "w-1/2"

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-overlay bg-opacity-50 bg-gray-900">
                <div className="w-[70%] h-[70%] bg-prev-prod p-5 rounded-lg relative" ref={previewRef}>
                    <div className="absolute top-2 right-2">
                        <IoCloseSharp
                            className="scale-150 text-red-600 hover:scale-[1.7] hover:cursor-pointer transition ease-in-out mr-1 mt-1"
                            onClick={() => {
                                onClose();
                            }}
                        />
                    </div>
                    <div className="w-full flex justify-between px-5">
                        <h1 className="text-5xl">{product.name}</h1>
                        <p className="text-2xl grid place-items-end">${product.cost}</p>
                    </div>
                    <div className='w-full h-[90%] pt-2 flex justify-between'>
                        <div className={`grid place-items-center w-1/2`}>
                            <img src={product.image} alt={product.name} className="object-cover w-[85%] h-[60%]" />
                        </div>
                        <div className="h-[90%] w-0.5 py-20 bg-white"></div>
                        <div className={`grid place-items-center w-1/2`}>
                            <p className={`h-[${descriptionHeight}] font-medium overflow-auto mx-7 my-3`}>{product.description}</p>
                            {!brief && <div className="grid gap-x-20 grid-cols-2">
                                <button className="bg-prim-color text-prim-font-color p-2 rounded-lg hover:bg-[#637A9F] hover:text-sec-font-color transition ease-in">Negotiate</button>
                                <button className="bg-prim-color text-prim-font-color p-2 rounded-lg hover:bg-[#637A9F] hover:text-sec-font-color transition ease-in">Buy Now</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}