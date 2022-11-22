import React from "react";
import CusBtn from "./common/locationBtn";
import { Pobtn, Setbtn } from "./Style/MainStyle";

const Main = () => {
  return (
    <>
      <div>Main</div>
      <CusBtn href="/signin" location="로그인" />
      <CusBtn href="/signup" location="회원가입" />
      <CusBtn href="/createproj" location="만들기" />
      <CusBtn href="/searchproj" location="찾기" />

      <img src="" alt="" />
      <p>포지션</p>
      <nav>
        <header>
          <Pobtn>웹</Pobtn>
          <Pobtn>서버</Pobtn>
          <Pobtn>안드로이드</Pobtn>
          <Pobtn>iOS</Pobtn>
          <Pobtn>게임</Pobtn>
          <nav className="Big_box">
            <p>
              <p>
                <Setbtn>웹</Setbtn>
                <Setbtn>서버</Setbtn>
                <Setbtn>안드로이드</Setbtn>
                <Setbtn>IOS</Setbtn>
                <Setbtn>게임</Setbtn>
                <Setbtn>디자인</Setbtn>
              </p>
            </p>
            <nav>
              <div className="dd">
                <h2>Title</h2>
                <p>Stack</p>
                <p>내용</p>
              </div>
              <div>박스2</div>
              <div>박스3</div>
              <div>박스4</div>
            </nav>
          </nav>
        </header>
      </nav>
    </>
  );
};

export default Main;
