import React from "react";

const name = "노지석";
const mail = "pyosik@gmail.com";
const stac = ["Java", "Spring"];
let stacs = "";
let age = 17;

const stacCh = () => {
  stacs = stac.join(", ");
  return stacs;
};

const MyInfo = () => {
  return (
    <>
      <nav id="title">
        <h1>
          <p>{name}님의 정보</p>
        </h1>
        <button>수정</button>
      </nav>
      <nav id="img">
        <img src="" alt="오류" />
        <button>수정</button>
      </nav>
      <nav id="mail">
        <p>메일 : {mail}</p>
      </nav>
      <nav>
        <p>스택 : {stacCh()}</p>
      </nav>
      <nav>
        <p>나이 : {age}살</p>
      </nav>
      <nav></nav>
    </>
  );
};

export default MyInfo;
