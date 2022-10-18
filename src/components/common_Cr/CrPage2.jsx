import React from "react";

const CrPage2 = () => {
  return (
    <>
      <p>당신이 선호하는 예상 일자와 마감 일자를 선택해주세요</p>
      <nav>
        <p>예상 일자</p>
        <input type="date" />
      </nav>
      <nav>
        <p>마감 일자</p>
        <input type="date" />
      </nav>
    </>
  );
};

export default CrPage2;
