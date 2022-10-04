import React from "react";
import CusBtn from "./common/locationBtn";

const Main = () => {
  return (
    <>
      <div>Main</div>
      <CusBtn href="/Signin" location="로그인" />
      <CusBtn href="/Signup" location="회원가입" />
    </>
  );
};

export default Main;
