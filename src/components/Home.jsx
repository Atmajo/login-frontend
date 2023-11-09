import React from "react";

const Home = ({ email }) => {
  return (
    <div>
      <div>
        <nav className="flex flex-row justify-between p-5 m-2 bg-slate-500 rounded-xl shadow-xl">
          <h3 className="p-2">{email}</h3>
          <div className="flex flex-row gap-5">
            <ul className="flex flex-row gap-5 p-2">
              <li><a href="/" className="hover:text-xl hover:border-purple-400 hover:border-b-2 ">HOME</a></li>
              <li><a href="/" className="hover:text-xl hover:border-purple-400 hover:border-b-2 ">ABOUT</a></li>
              <li><a href="/" className="hover:text-xl hover:border-purple-400 hover:border-b-2 ">CONTACT</a></li>
            </ul>
            <div className="gap-2 border-black rounded-md border-2 p-2 hover:bg-slate-200 hover:border-purple-400">
              <ul>
                <li>
                  <a href="/login">LOGOUT</a>
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
