import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Sell() {

    const [buttonClicked, setButtonClicked] = useState(false);

    let openedDetail = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (buttonClicked && openedDetail.current && !openedDetail.current.contains(event.target)) {
                setButtonClicked(false)
            }
        })
    })

    const productDetail =
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-overlay bg-opacity-50 bg-gray-900">
            <div className="flex flex-col w-1/2 bg-prev-prod rounded-lg p-5" ref={openedDetail}>
                <h1 className="text-2xl font-bold text-center mb-5">Product Details</h1>
                <form>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-lg font-bold mb-2">Name</label>
                        <input type="text" id="name" className="border-2 bg-slate-200 p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="text-lg font-bold mb-2">Description</label>
                        <textarea id="description" className="border-2 bg-slate-200 p-2 rounded-lg resize-none overflow-auto" ></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="cost" className="text-lg font-bold mb-2">Cost</label>
                        <input type="number" id="cost" className="border-2 bg-slate-200 p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="image" className="text-lg font-bold mb-2">Image</label>
                        <input type="file" id="image" className="border-2 bg-slate-200 p-2 rounded-lg" />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-prim-color text-prim-font-color p-2 rounded-lg hover:bg-[#637A9F] hover:text-sec-font-color transition ease-in">Submit</button>
                    </div>
                </form>
            </div>
        </div >


    if (buttonClicked) {
        return productDetail
    } else {
        return (
            <button
                className="text-white  font-medium tracking-widest rounded-xl text-xl px-5 py-2.5 bg-green-500 hover:bg-green-600 hover:scale-[1.05] fixed right-0 bottom-0 mr-5 mb-5 w-[7rem] grid grid-flow-col place-items-center gap-2"
                onClick={() => {
                    setButtonClicked(true)
                }}>
                <FaPlus />
                Sell
            </button>
        )
    }
}