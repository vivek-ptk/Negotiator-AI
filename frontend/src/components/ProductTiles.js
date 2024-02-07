import { useState } from "react";
import ProductPreview from "./ProductPreview";

function ProductTiles({ product, brief }) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const width = brief ? '100%' : '22%'
    const height = brief ? '10%' : '30%'
    const briefMarginX = brief ? 'mx-5' : 'mx-2'
    const briefMarginY = brief ? 'my-3' : ''
    const hoverScale = brief ? '1.01' : '1.05'

    return (
        <>
            <div
                className={`w-[${width}] h-[${height}] ${briefMarginX} ${briefMarginY} rounded-lg bg-sec-color text-sec-font-color hover:scale-[${hoverScale}] hover:cursor-pointer transition ease-in-out`}
                onClick={() => {
                    setIsPreviewOpen(true);
                }}
            >
                <div className="grid px-2 py-1">
                    {!brief && <>
                        <div className="grid place-items-center ">
                            <img src={product.image} alt={product.name} className="object-cover w-full h-[10rem] my-2" />
                        </div>
                        <div className="bg-white max-w-full mx-1 h-0.5 mb-2"></div>
                    </>}
                    <div className="flex justify-between mb-2">
                        {brief && <>
                            <div>
                                <h2 className="text-lg font-medium">{product.name}</h2>
                                <p className="text-xs">{product.time}</p>
                            </div>
                        </>}
                        {!brief && <h2 className="text-lg font-medium">{product.name}</h2>}
                        <p>${product.cost}</p>
                    </div>
                    {!brief && <>
                        <div className="flex flex-col w-[17rem] h-[3.5rem]">
                            <div className="overflow-hidden">{product.description}</div>
                        </div>
                    </>}
                </div>
            </div>
            {isPreviewOpen && <ProductPreview key={product.id} product={product} onClose={() => setIsPreviewOpen(false)} brief={brief} />}
        </>
    )
}

export default ProductTiles;