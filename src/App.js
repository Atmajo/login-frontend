import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

const App = () => {
  const [user, setLoginUser] = useState();
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" }  );
  }

  return (
    <div>
      <BrowserRouter>
        <CookiesProvider>
          <Routes>
            <Route exact path="/" element={cookies.user?<Home email={user} />:<Login setLoginUser={setLoginUser} onLogin={handleLogin}/>} />
            <Route
              path="/login"
              element={<Login setLoginUser={setLoginUser} onLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
