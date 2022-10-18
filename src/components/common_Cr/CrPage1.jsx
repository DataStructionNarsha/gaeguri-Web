import React, { useState } from "react";
import CusInput from "../common/CusInput";

const CrPage1 = () => {
  const [ProjName, setProjName] = useState();
  return (
    <>
      <nav id="Projname">
        <p>프로젝트의 이름을 알려주세요</p>
        <CusInput
          value={ProjName}
          setValue={setProjName}
          placeholder={""}
          type={"text"}
        />
      </nav>
      <nav id="purpose">
        <p>포트폴리오용 인가요 대회용인가요?</p>
        <span>
          <input type="radio" id="portfolio" name="purpose" />
          <label htmlFor="portfolio">포트폴리오</label>
        </span>
        <span>
          <input type="radio" id="competition" name="purpose" />
          <label htmlFor="competition">대회</label>
        </span>
      </nav>
      <nav id="files">
        <p>프로젝트용 포스터가 있으면 넣어주세요</p>
        <input type="file" />
      </nav>
    </>
  );
};

export default CrPage1;
