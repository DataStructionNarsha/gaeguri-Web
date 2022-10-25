import React, { useState } from "react";
import Page1 from "./common_Cr/CrPage1";
import Page2 from "./common_Cr/CrPage2";
import Page3 from "./common_Cr/Crpage3";
// onClick={
  //   NextPage()
  //   // if (e == 4) {
    //   //   let TFcheck = confirm("프로젝트를 완성하시겠습니까?");
    //   //   if (TFcheck == true) {
      //   //     console.log("프로젝트 완료");
      //   //   } else {
        //   //     e - 1;
        //   //   }
        //   // }
        // }
const create = () => {
  /*
  const [page, setPage] = useState(0);
  const NextPage = () => {  
    setPage((e) => e + 1);
    console.log(page);
  };

  // onClick={
  //   PreviousPage()
  //   // if (e == 0) {
  //   //   e + 1;
  //   // }
  // }
  const PreviousPage = () => {
    setPage((e) => e - 1);
    console.log(page);
  };*/
  return (
    <>
      <h1>새로운 프로젝트 생성</h1>
      <nav>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <Page1/>
      {/*page == 0 ? <Page1 /> : page == 1 ? <Page2 /> : <Page3 />*/}
      <nav>
        <button >이전</button>
        <button>다음</button>
      </nav>
    </>
  );
};

export default create;
