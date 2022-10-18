import React, { useState } from "react";
import CusInput from "../common/CusInput";

const Search_Box = () => {
  const [search, setSearch] = useState("");
  return (
    <span>
      <select>
        <option value={"전체"}>전체</option>
        <option value={"제목"}>제목</option>
        <option value={"내용"}>내용</option>
        <option value={"관련기술"}>관련기술</option>
      </select>
      <CusInput
        value={search}
        setValue={setSearch}
        placeholder={"검색"}
        type={"text"}
      />
      <button
        onClick={() => {
          console.log(search);
        }}
      >
        검색
      </button>
    </span>
  );
};

export default Search_Box;
