import React from "react";

const CustomInput = ({ value, setValue, placeholder, type }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default CustomInput;
