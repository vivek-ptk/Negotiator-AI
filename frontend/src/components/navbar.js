import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function Navbar() {
    
  const image = localStorage.getItem("image");

  return (
    <>
      <nav className="flex justify-between my-1 mx-1 py-2 px-2 rounded-md text-xl bg-sec-color">
        <h1 className="grid place-content-center px-5 hover:cursor-pointer text-sec-font-color">
          <Link to="/">Negotiator-AI</Link>
        </h1>
        <div className="w-[55%] flex justify-between pr-4">
          <SearchBar />
          <Link to="/chat" className="grid place-items-center">
            <div className=" hover:text-font-color px-2 rounded-md hover:cursor-pointer text-sec-font-color">
              Chats
            </div>
          </Link>
          <Link to="/profile" className="grid place-items-center">
            <div className="h-10 w-10 mr-1  text-prim-font-color hover:scale-105 hover:cursor-pointer hover:text-sec-font-color">
              <img
                src={image}
                className="rounded-xl"
                alt="Profile"
                title="Profile"
              />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
