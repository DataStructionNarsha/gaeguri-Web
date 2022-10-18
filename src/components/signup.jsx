import React from "react";
import CusBtn from "./common/locationBtn";
import "./common/signup.css";
const signup = () => {


  return (
    <>
      <div id="title" className="as">signup</div>
      <CusBtn href="/Signin" location="로그인페이지로 이동" />
      
      <div className="Signup">
        <div className="Signup_center">
          <form action="#" method="post">
            <input type="text" name = "email" placeholder="email"/>
            <input type="text" name = "id" placeholder="id"/>
            <input type="text" name = "name" placeholder="name"/>
            <input type="text" name="password" placeholder="password"/>
            <input type="text" name="passwordCheck" placeholder="passwordCheck"/>
            <input type="text" name = "stac" placeholder="stac"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
        
        
      
      
    </>
  );
};

export default signup;
