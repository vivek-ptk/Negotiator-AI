import React from 'react';
import { Link } from 'react-router-dom';

import user from "../data/user";
import SearchBar from './SearchBar';


const name = user.name;
const nameArr = name.split(" ")

function Navbar() {
    return (
        <>
            <nav className="flex justify-between my-1 mx-1 py-2 px-2 rounded-md text-xl bg-sec-color">
                <h1 className="grid place-content-center px-5 hover:cursor-pointer text-sec-font-color">
                    <Link to="/">Negotiator-AI</Link>
                </h1>
                <div className="w-2/3 flex justify-evenly">
                    <SearchBar />
                    {name && <div className='grid place-items-center hover:text-hover-font-color px-2 rounded-md hover:cursor-pointer text-sec-font-color'>Chats</div>}
                    <Link to="/profile" className='grid place-items-center'>
                        <div className='rounded-lg px-2 py-1 mr-1 bg-prim-color text-prim-font-color hover:bg-amber-500 hover:cursor-pointer hover:text-sec-font-color' title={`${name}`}>
                            {nameArr[0][0]}
                            {nameArr.length > 1 && nameArr[nameArr.length - 1][0]}
                        </div>
                    </Link>
                </div>
            </nav >

        </>
    );
}

export default Navbar;