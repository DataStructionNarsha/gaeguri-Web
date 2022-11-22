import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isloggin, setloggin] = useState(false);
  return (
    <header>
      <div>
        <span>Header</span>
        {isloggin ? (
          <>
            <span>프로젝트 찾기</span>
            <span>프로젝트 만들기</span>
          </>
        ) : null}
      </div>
      <div>
        {isloggin ? (
          <span>로그아웃</span>
        ) : (
          <>
            <span>로그인</span>
            <span>회원가입</span>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
