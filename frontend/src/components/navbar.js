import React from 'react';
import { Link } from 'react-router-dom';

import user from "../data/user";


const name = user.name;
const nameArr = name.split(" ")

function navbar() {
    return (
        <>
            <nav className="flex justify-between my-1 mx-1 py-2 px-2 rounded-md text-xl bg-prim-color">
                <h1 className="grid place-content-center px-5 hover:cursor-pointer text-sec-color">Negotiator-AI</h1>
                <div className="w-1/6 flex justify-evenly">
                    {name && <div className='grid place-items-center hover:bg-slate-200 px-2 rounded-md hover:cursor-pointer'>Chats</div>}
                    {/* <Link to="/profile" > */}
                    <div className='rounded-lg px-2 py-1 mr-1 bg-orange-200 hover:bg-orange-300 active:bg-orange-300 hover:cursor-pointer'>
                        {nameArr[0][0]}
                        {nameArr.length > 1 && nameArr[nameArr.length - 1][0]}
                    </div>
                    {/* </Link> */}
                </div>
            </nav >

        </>
    );
}

export default navbar;