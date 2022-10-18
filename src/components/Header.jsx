import React, { useState } from "react";

const Header = () => {
  const [isloggin, setloggin] = useState(false);
  return (
    <header>
      <p>
        <span>Header</span>
        <span>프로젝트 찾기</span>
        <span>프로젝트 만들기</span>
      </p>
      <p>
        {isloggin ? (
          <span>로그아웃</span>
        ) : (
          <>
            <span>로그인</span>
            <span>회원가입</span>
          </>
        )}
      </p>
    </header>
  );
};
export default Header;
