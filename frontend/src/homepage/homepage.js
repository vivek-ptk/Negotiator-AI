import ProductTiles from "../components/ProductTiles";
import Slides from "../components/Slides";
import Navbar from "../components/navbar";
import productList from "../data/productList";

import user from "../data/user";

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

import { jwtDecode } from "jwt-decode"; //decode the google credentials  
import { useState } from "react";

function setUser(id, name, email) {
    user.id = id;
    user.name = name;
    user.email = email;
    user.products = [];
    user.chats = [{}];
}

function Homepage() {
    let name = localStorage.getItem("name")
    const [loggedIn, setLogin] = useState(name);
    // const [isPending, setIsPending] = useState(true);
    console.log(loggedIn);
    if (!loggedIn) {
        return (
            <div className="h-screen grid place-items-center  bg-prim-color">
                <div className="text-5xl text-center">Welcome to<br />Negotiation-AI</div>
                <div className="mb-[10rem]">
                    <GoogleOAuthProvider clientId="">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const decoded = jwtDecode(credentialResponse.credential);
                                // console.log(decoded);
                                setUser(credentialResponse.clientId, decoded.name, decoded.email)
                                setLogin(true);
                                // setIsPending(false);
                                localStorage.setItem("name", decoded.name)
                                localStorage.setItem("id", credentialResponse.clientId)
                                localStorage.setItem("email", decoded.email)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <Navbar />
                <Slides />
                <div className="flex flex-wrap justify-start m-7 gap-5 min-h-full">
                    {productList.map((product) => {
                        return <ProductTiles key={product.id} product={product} />
                    })}
                </div>
            </>
        );
    }
}

export default Homepage;