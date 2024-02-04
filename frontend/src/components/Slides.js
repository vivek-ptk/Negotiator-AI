import { useNavigate } from "react-router-dom";
import Typewriter from "./typewriter";

const Slides = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/chat");
    };
    return (
        <div className="w-full flex">
            <div className="w-[40%] h-96 bg-primary-pattern"></div>
            <div className="w-[60%] h-96 bg-font-color">
                <div className="mx-14 px-10 my-6">
                    <h1 className="text-6xl font-bold mt-5 mb-3">LET US NEVER FEAR TO NEGOTIATE.</h1>
                    <div className="h-[5rem]">
                        <Typewriter text="Sharpen your edge and unlock hidden value in every interaction. Our AI-empowers you to navigate negotiations with clarity.Whether you're negotiating a raise, haggling a used car - make it ethically and effortlessly." delay={60} />
                    </div>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-sec-color hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-font-color my-8"
                        onClick={handleClick}
                    >
                        Check It Out!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slides;