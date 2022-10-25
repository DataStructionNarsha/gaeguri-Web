import React from "react";
import CusBtn from "./common/locationBtn";
import "./common/signup.css";
import CusChPass from "./commonSu/CusPassInput"



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
            <CusChPass type={"password"} placeholder1={"비밀번호를 입력해주세요"} placeholder2={"비밀번호 확인"} />
            <input type="text" name="stac" placeholder="stac"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
        
        
      
      
    </>
    
  );


export default signup;
