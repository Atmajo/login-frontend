import React from "react";
import {AiOutlineMenu} from "react-icons/ai";

const Home = ({ email }) => {
  return (
    <div>
      <div className="navbar sm">
        <nav className="flex flex-row justify-between p-5 m-2 bg-slate-500 rounded-xl shadow-xl">
          <h3 className="p-1">{email}</h3>
          <div className="flex flex-row gap-3">
            <ul className="flex flex-row gap-3 p-1">
              <li><a href="/" className="text-sm hover:text-xl hover:border-purple-400 hover:border-b-2 ">HOME</a></li>
              <li><a href="/" className="text-sm hover:text-xl hover:border-purple-400 hover:border-b-2 ">ABOUT</a></li>
            </ul>
            <div className="gap-1 border-black rounded-md border-2 p-2 hover:bg-slate-200 hover:border-purple-400">
              <ul>
                <li>
                  <a href="/login" className="text-sm ">LOGOUT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
