import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Create from "./components/Create";
import Search from "./components/Search";
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import ProjFinish from "./components/ProjFinish";

const Router = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {isLogged ? (
          <>
            <Route path="/MyInfo" element={<MyInfo />} />\
            <Route path="projFinish" element={<ProjFinish />} />
          </>
        ) : (
          <>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signin" element={<Signin />} />
          </>
        )}
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
