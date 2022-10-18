import React from "react";

const Crpage3 = () => {
  return (
    <>
      <p>마지막으로 당신이 원하는 팀원의 정보를 입력해주세요</p>
      <nav>
        <head>
          <span>포지션</span>
          <span>스택</span>
          <span>팀원 연령</span>
          <span>명 수</span>
        </head>
        <div>
          <select id="position">
            <option value="웹">웹</option>
            <option value="서버">서버</option>
            <option value="안드로이드">안드로이드</option>
            <option value="IOS">IOS</option>
            <option value="디자인">디자인</option>
            <option value="기획">기획</option>
            <option value="발표">발표</option>
            <option value="게임">게임</option>
          </select>
          <input id="stac" type="text" placeholder="ex)Java, SpringBoot" />
          <select>
            <option value="상관 없음">상관 없음</option>
            <option value="중, 고등학생">중, 고등학생</option>
            <option value="대학생 이상">대학생 이상</option>
          </select>
          <input type="number" min={0} />
        </div>
      </nav>
    </>
  );
};

export default Crpage3;
