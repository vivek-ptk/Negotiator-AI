import { useState } from "react";
import ProductPreview from "./ProductPreview";

function ProductTiles({ product }) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    return (
        <>
            <div
                className="w-[22%] h-[30%] mx-2 bg-tiles rounded-lg text-sec-font-color hover:scale-[1.05] hover:cursor-pointer transition ease-in-out"
                onClick={() => {
                    setIsPreviewOpen(true);
                }}
            >
                <div className="grid px-2 py-1">
                    <div className="grid place-items-center ">
                        <img src={product.image} alt={product.name} className="object-cover w-full h-[10rem] my-2" />
                    </div>
                    <div className="bg-white max-w-full mx-1 h-0.5 mb-2"></div>
                    <div className="flex justify-between mb-2">
                        <h2 className="text-lg font-medium">{product.name}</h2>
                        <p>{product.cost}</p>
                    </div>
                    <div className="flex flex-col min-h-[3.5rem]">
                        <p className="line-clamp-2">{product.description}</p>
                    </div>
                </div>
            </div>
            {isPreviewOpen && <ProductPreview key={product.id} product={product} onClose={() => setIsPreviewOpen(false)} />}
        </>
    )
}

export default ProductTiles;