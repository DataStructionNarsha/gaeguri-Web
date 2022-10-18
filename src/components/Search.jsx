import React from "react";
import SideScBox from "./common_Sc/Postion_Box";
import Search_Box from "./common_Sc/Search_Box";
import ProjBox from "./common_Sc/Proj";

const Search = () => {
  return (
    <>
      <Search_Box />
      <SideScBox />
      <nav>
        <ProjBox />
      </nav>
    </>
  );
};

export default Search;
