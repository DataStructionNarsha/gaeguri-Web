import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signin from "./components/signin";
import Signup from "./components/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
