import React, { useState } from "react";

const CusCheckBox = ({ name }) => {
  //const [isCheck, setCheck] = useState(false);
  return (
    <p>
      <input type="checkbox" />
      <span>{name}</span>
    </p>
  );
};

export default CusCheckBox;
