import React, { useState, axios } from "react";
import { useNavigate } from "react-router-dom";
const Page1 = ({ projName, setProjName, purpose, setPurpose }) => {
  let port = false,
    com = false;
  if (purpose == "portfolio") {
    port = true;
  } else {
    port = false;
  }
  if (purpose == "competition") {
    com = true;
  } else {
    com = false;
  }
  return (
    <>
      <nav id="Projname">
        <p>프로젝트의 이름을 알려주세요</p>
        <input
          type={"text"}
          placeholder="이름을 입력해주세요."
          value={projName}
          onChange={(e) => {
            setProjName(e.target.value);
          }}
        />
      </nav>
      <nav id="purpose">
        <p>포트폴리오용 인가요 대회용인가요?</p>
        <span>
          <input
            type="radio"
            id="portfolio"
            name="purpose"
            checked={port}
            onChange={() => {
              setPurpose("portfolio");
            }}
          />
          <label htmlFor="portfolio">포트폴리오</label>
        </span>
        <span>
          <input
            type="radio"
            id="competition"
            name="purpose"
            checked={com}
            onChange={() => {
              setPurpose("competition");
            }}
          />
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

const Page2 = ({ maydate, setMaydate, lastdate, setLastdate }) => {
  return (
    <>
      <p>당신이 선호하는 예상 일자와 마감 일자를 선택해주세요</p>
      <nav>
        <p>예상 일자</p>
        <input
          type="date"
          value={maydate}
          onChange={(e) => {
            setMaydate(e.target.value);
          }}
        />
      </nav>
      <nav>
        <p>마감 일자</p>
        <input
          type="date"
          value={lastdate}
          onChange={(e) => {
            setLastdate(e.target.value);
          }}
        />
      </nav>
    </>
  );
};

const Page3 = ({ members, setMembers }) => {
  return (
    <>
      <p>마지막으로 당신이 원하는 팀원의 정보를 입력해주세요</p>
      <nav>
        {}
        <Page3Members></Page3Members>
        <button
          onClick={() => {
            setMembers(members + 1);
          }}
        >
          +
        </button>
        {members > 1 ? (
          <button
            onClick={() => {
              setMembers(members - 1);
            }}
          >
            -
          </button>
        ) : null}
      </nav>
    </>
  );
};

const Page3Members = () => {
  return (
    <div>
      <div>
        <span>포지션</span>
        <span>스택</span>
        <span>팀원 연령</span>
        <span>명 수</span>
      </div>
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
    </div>
  );
};

const Create = () => {
  const [page, setPage] = useState(0);
  const [members, setMembers] = useState(1);
  const [projName, setProjName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [maybedate, setMaybedate] = useState("");
  const [lastdate, setLastdate] = useState("");
  let Navigate = useNavigate();

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
      console.log(projName);
      console.log(purpose);
      console.log(maybedate);
      console.log(lastdate);
    } else {
      let finish = window.confirm("프로젝트를 완료하실껀가요?");
      console.log(finish);
      if (finish) {
        Navigate("/ProjFinish");
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
      <nav>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      {page == 0 ? (
        <Page1
          purpose={purpose}
          projName={projName}
          setProjName={setProjName}
          setPurpose={setPurpose}
        />
      ) : page == 1 ? (
        <Page2
          maydate={maybedate}
          setMaydate={setMaybedate}
          lastdate={lastdate}
          setLastdate={setLastdate}
        />
      ) : (
        <Page3 members={members} setMembers={setMembers} />
      )}
      <nav>
        <button onClick={PreviousPage}>이전</button>
        <button onClick={NextPage}>다음</button>
      </nav>
    </>
  );
};

export default Create;
