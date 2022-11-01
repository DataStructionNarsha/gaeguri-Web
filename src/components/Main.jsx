import React from "react";
import CusBtn from "./common/locationBtn";

const Main = () => {
  return (
    <>
      <div>Main</div>
      <CusBtn href="/signin" location="로그인" />
      <CusBtn href="/signup" location="회원가입" />
      <CusBtn href="/create" location="만들기" />
      <CusBtn href="/search" location="찾기" />
    </>
  );
};

export default Main;
