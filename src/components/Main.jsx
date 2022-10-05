import React from "react";
import CusBtn from "./common/locationBtn";

const Main = () => {
  return (
    <>
      <div>Main</div>
      <CusBtn href="/Signin" location="로그인" />
      <CusBtn href="/Signup" location="회원가입" />
      <CusBtn href="/CreateProj" location="만들기" />
      <CusBtn href="/SearchProj" location="찾기" />
    </>
  );
};

export default Main;
