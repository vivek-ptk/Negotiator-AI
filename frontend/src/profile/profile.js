import ProductTiles from "../components/ProductTiles";
import Sell from "../components/Sell";
import Navbar from "../components/navbar";
import user from "../data/user";

export default function profile() {
    return (
        <div className="pb-10">
            <Navbar />
            <div className="w-screen h-[80vh] mt-5 flex">
                <div className="w-1/2 h-full grid place-items-center">
                    <div>
                        <div className="text-6xl">{user.name}</div>
                        <div className="text-xl">{user.email}</div>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <div className=" grid place-items-center gap-2 p-3 rounded-md bg-red-300">
                            <div className="text-2xl">{user.products.length}</div>
                            <div className="text-lg">Products</div>
                            <div className="text-lg">On Sale</div>
                        </div>
                        <div className=" grid place-items-center gap-2 p-3 rounded-md bg-violet-700 text-white">
                            <div className="text-2xl">{user.chats.length}</div>
                            <div className="text-lg">Ongoing</div>
                            <div className="text-lg">Negotiation</div>
                        </div>
                    </div>
                </div>
                <div className="w-[0.1rem] h-full bg-black"></div>
                <div className="w-1/2 h-full px-5 py-3">
                    {user.products.length > 0 ? <>
                        <h1 className="text-xl underline underline-offset-2 pb-2">Your Products</h1>
                        <div className="h-[90%] px-2 py-3 overflow-auto">
                            {user.products.map((product) => {
                                return <ProductTiles key={product.id} product={product} brief={true} />
                            })}
                        </div>
                    </>
                        :
                        <h1 className="h-full grid place-items-center text-3xl">No Product On Sale</h1>
                    }
                </div>
            </div>
            <Sell />
        </div>
    )
}