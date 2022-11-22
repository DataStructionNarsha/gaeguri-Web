import React, {useState} from "react";
import CusBtn from "./common/locationBtn";
import "./common/signup.css";

const Signup = () =>{
  const emailJ = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const passChVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;
  const [pass, setPass] = useState(""); // 첫 번째 pssword
  const [passCh, setPassCh] = useState(""); // 두 번째 pssword
  const [passwordType, setPasswordType] = useState({ //password type 변경
    type: 'password',
    visible: false
  });
  let age = document.getElementById('age');
  let id =document.getElementById('id');
  let info =document.getElementById('info');
  let password =document.getElementById('password');
  let stac =document.getElementById('stac');
  let profileimage =document.getElementById('profileimage');


//password type 변경하는 함수
const handlePasswordType = e => {
    setPasswordType(() => {
        if (!passwordType.visible) {
            return { type: 'text', visible: true };
        }
        return { type: 'password', visible: false };
    })
}

//password 정규식확인 함수
  const passCh22 = () =>{
    if(passChVal.test(pass)){
      console.log("형식 O");
    }else{
      console.log("형식 X");
    }
  }
  //password가 일치하는지 확인, email정규식 확인
  setTimeout(() => {
        
    if(pass == passCh && pass != ""){
        console.log("success");
    }else{
        console.log('faild');
    }
    



  }, "10")

  const handleJoin = () => {
    fetch('http://10.80.163.109:5500/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        "age": {age},
        "id": {id},
        "info": {info},
        "password": {password},
        "position": [
          {stac}
        ],
        "profileimage": {profileimage} 
      }),
    })
  }

  return (
    <>
      <div id="title" className="as">signup</div>
      <CusBtn href="/Signin" location="로그인페이지로 이동" />
      
      <div className="Signup">
        <div className="Signup_center">

          <form method="post">
  
          <input type="number" name = "age" placeholder="age" id="age"/>

            <input type="text" name = "id" placeholder="id" id="id"/>

            <input type="text" name = "info" placeholder="자기소개" id="info"/>

            <input type={passwordType.type} name = "password" placeholder="password" onChange={(e)=>{setPass(e.target.p1alue); passCh22()}} p1alue={pass} id="password"/>

            <span onClick={handlePasswordType}>
            	{  passwordType.visible ? <span>숨기기</span> : <span>보이기</span>  }
            </span>

            <input type="password" name = "password" placeholder="check password"  onChange={(e)=>{setPassCh(e.target.p1alue);}} p1alue={passCh}/>

            <input type="text" name="stac" placeholder="stac" id="stac"/>

            <input type="text" name="profile" placeholder="프사" id="profileimage"/>

            <input type="button" onClick={handleJoin} name ="회원가입"/>

          </form>

        </div>
      </div>
        
        
      
      
    </>
    
  );
}

export default Signup;
