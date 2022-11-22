import React, { useState, axios } from "react";
import CusInput from "./common/CusInput";
let portCh = document.querySelector('input[name="purpose"]:checked');

const Create = () => {
  const [page, setPage] = useState(0);
  const [ProjName, SetProjName] = useState("");
  const page1 = () => {
    return (
      <>
        <nav id="Projname">
          <p>프로젝트의 이름을 알려주세요</p>
          <CusInput
            value={ProjName}
            setValue={SetProjName}
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

  const page2 = () => {
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

  const page3 = () => {
    return (
      <>
        <p>마지막으로 당신이 원하는 팀원의 정보를 입력해주세요</p>
        <nav>
          <header>
            <span>포지션</span>
            <span>스택</span>
            <span>팀원 연령</span>
            <span>명 수</span>
          </header>
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
          <button>+</button>
        </nav>
      </>
    );
  };

  const PreviousPage = () => {
    if (page > 0) {
      setPage((e) => (e = e - 1));
      console.log(page);
    }
  };
  const NextPage = () => {
    if (page < 2) {
      setPage((e) => (e = e + 1));
      console.log(page);
      // if (page == 0) {
      // } else if (page == 1) {
      // } else if (page == 2) {
      // }
      console.log(ProjName);
    } else {
      let finish = window.confirm("프로젝트를 완료하실껀가요?");
      console.log(finish);
      if (finish) {
        window.location.href = "/ProjFinish/";
        //window.history.pushState("", title, "/ProjFinish/");
      }
    }
  };
  // const divbox = () => {
  //   return (
  //     <>
  //       <div className={`box${page}`} />
  //       <div className={`box${page}`} />
  //       <div className={`box${page}`} />
  //     </>
  //   );
  // };
  return (
    <>
      <h1>새로운 프로젝트 생성</h1>
      {/* <nav>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      {page == 0 ? <Page1 /> : page == 1 ? <Page2 /> : <Page3 />}
      <nav>
        <button onClick={PreviousPage}>이전</button>
        <button onClick={NextPage}>다음</button>
      </nav> */}
    </>
  );
};

export default Create;
