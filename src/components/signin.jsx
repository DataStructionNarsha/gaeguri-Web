import React,{useState} from "react";
import CusBtn from "./common/locationBtn";

const SignIn = () => { //대문자로 바꿈 회원가입도 마찬가지
  const [passwordType, setPasswordType] = useState({ //password type 변경
    type: 'password',
    visible: false
  });

  //password type 변경하는 함수
  const handlePasswordType = e => {
      setPasswordType(() => {
          if (!passwordType.visible) {
              return { type: 'text', visible: true };
          }
          return { type: 'password', visible: false };
      })
    }
  return (
    <>
      <div>signIn</div>
      <CusBtn href="/Signup" location="회원가입" />

      <form action="#" method="post">
        <input type ="text" id = "email"/>
        <input type ={passwordType.type} id = "password"/>
        <span onClick={handlePasswordType}>
          {  passwordType.visible ? <span>숨기기</span> : <span>보이기</span>  }
        </span>
        <input type="submit"/>
      </form>

    </>
  );
};

export default SignIn;
