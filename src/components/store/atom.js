import React from "react";
import { atom } from "recoil";

const isLogged = atom({
  key: "login",
  default: true,
});

export { isLogged };
