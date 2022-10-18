import React from "react";
import CusChbox from "../common/CusCheckBox";

const Search_Box = () => {
  return (
    <>
      <nav>
        <span>
          <p>원하는 포지션</p>
          <CusChbox name="웹" />
          <CusChbox name="서버" />
          <CusChbox name="안드로이드" />
          <CusChbox name="IOS" />
          <CusChbox name="디자인" />
          <CusChbox name="기획" />
          <CusChbox name="발표" />
          <CusChbox name="게임" />
        </span>
      </nav>
    </>
  );
};

export default Search_Box;
