import React from "react";

const radioBtn = ({ value, name, children }) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        onChange={() => {
          console.log(children);
        }}
      />
      {children}
    </label>
  );
};

export default radioBtn;
