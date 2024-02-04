import React from 'react';
import { Link } from 'react-router-dom';

import user from "../data/user";


const name = user.name;
const nameArr = name.split(" ")

function navbar() {
    return (
        <>
            <nav className="flex justify-between my-1 mx-1 py-2 px-2 rounded-md text-xl bg-sec-color">
                <h1 className="grid place-content-center px-5 hover:cursor-pointer text-sec-font-color">Negotiator-AI</h1>
                <div className="w-1/6 flex justify-evenly">
                    <Link to="/chat" >
                        {name && <div className='grid place-items-center hover:text-font-color px-2 rounded-md hover:cursor-pointer text-sec-font-color'>Chats</div>}
                    </Link>
                    <Link to="/profile" >
                        <div className='rounded-lg px-2 py-1 mr-1 hover:text-font-color active:bg-prim-color hover:cursor-pointer text-sec-font-color'>
                            {nameArr[0][0]}
                            {nameArr.length > 1 && nameArr[nameArr.length - 1][0]}
                        </div>
                    </Link>
                </div>
            </nav >

        </>
    );
}

export default navbar;