import React, { useState } from "react";
//import RadioBtn from "./common/radioBtn";

const ProjFinish = () => {
  const [radio, setRadio] = useState(0);
  const handlerClRadioBtn = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };
  return (
    <>
      <div>ProjFinish</div>
      <label>
        <input
          type="radio"
          value={1}
          name={"purpose"}
          checked={radio === "1"}
          onChange={handlerClRadioBtn}
        />
        {"포트폴리오"}
      </label>
      <label>
        <input
          type="radio"
          value={2}
          name={"purpose"}
          checked={radio === "2"}
          onChange={handlerClRadioBtn}
        />
        {"대회용"}
      </label>
      {/* <RadioBtn value={"purpose"} name={"port"} children={"port"} />
      <RadioBtn value={"purpose"} name={"port"} children={"contest"} /> */}
      {/* <button onClick={portCh()}>zmfflr</button> */}
    </>
  );
};

export default ProjFinish;
