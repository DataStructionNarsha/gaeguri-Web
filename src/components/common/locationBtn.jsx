import React from "react";

const CusButton = ({ href, location }) => {
  console.log(href);
  const clickMe = () => {
    window.location.href = href;
  };
  return <button onClick={clickMe}>{location}</button>;
};

export default CusButton;
