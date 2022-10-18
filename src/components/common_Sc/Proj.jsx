import React from "react";

const info =
  "SW 공모전 소프트웨어 개발을 맡을 팀원들을 모집합니다. 저는 작년에도 이 공모전에 참가하여 금상을 받은 이력이 있으며";

const Proj = () => {
  return (
    <>
      <span>모집중</span>
      <h3>SW 공모전 소프트웨어 개발</h3>
      <p>
        <span>예상기간 : {"60"}일</span>
        <span>마감기한 : {"2022-05-12"}</span>
      </p>
      <p>{info}...</p>
      <p>
        <span>안드로이드</span>
        <span>IOS</span>
        <span>웹</span>
        <span>대회</span>
        <span>중/고등학생</span>
        <span>등록 일자 : {"2009-05-23"}</span>
      </p>
      <nav>
        <p>마감 {20}일전</p>
        <p>지원자 {1}명</p>
      </nav>
    </>
  );
};

export default Proj;
