import React, {useState,} from "react";
// import  post from "axios";
import CusBtn from "./common/locationBtn";
import "./common/signup.css";
import axios from "axios";
// import formData from "form-data";

const Signup = () =>{
  const passChVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;
  const [pass, setPass] = useState(""); // 첫 번째 pssword
  const [passCh, setPassCh] = useState(""); // 두 번째 pssword
  const [passwordType, setPasswordType] = useState({ //password type 변경
    type: 'password',
    visible: false
  });
  var photoFile = document.getElementById("profileimage");
  var state = { 
    age : '',
    id : '',
    info : '',
    password : '',
    stac : '',
    profileimage : '',
  }

 //----------------------------------------------프로필 이미지 파일 선택 하면 미리보게 해주는 함수--------------------------------------------
 const onChange = (e)=>{
  var preview = document.querySelector('img');
  let files = e.target.files;
  console.log(files);
  let reader = new FileReader();
  reader.addEventListener(
    'load',
    function () {
      preview.src = reader.result;
    },
    false
  );
  reader.onload = r => {
       console.log(r.target.result);
   };
  reader.readAsDataURL(files[0]);
 }
//----------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------password type 변경하는 함수----------------------------------------------------------------------//
const handlePasswordType = e => {
    setPasswordType(() => {
        if (!passwordType.visible) {
            return { type: 'text', visible: true };
        }
        return { type: 'password', visible: false };
    })
}
/*--------------------------------------------------------------------------------------------------------------------------*/
//-------------------------------------------------password 정규식확인 함수--------------------------------------------------//
  const passCh22 = () =>{
    if(passChVal.test(pass)){
      console.log("형식 O");
    }else{
      console.log("형식 X");
    }
  }
  /*--------------------------------------------------------------------------------------------------------------------------*/ 
  //----------------------------------------------password가 일치하는지 확인, email정규식 확인-----------------------------------//
  setTimeout(() => {
        
    if(pass == passCh && pass != ""){
        console.log("success");
    }else{
        console.log('faild');
    }
    

  }, "10")
//---------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------서버에 보내기---------------------------------------------------------
  const handleJoin = () => {
    
    var url = 'http://10.80.163.109:5500/api/auth/signup';
    var formData = new FormData();
    formData.append('age',state.age);
    formData.append('id',state.id);
    formData.append('info',state.info);
    formData.append('password',state.password);
    formData.append('stac',state.stac);
    formData.append("photo", photoFile.files[0]);
    var config = {
      headers : {
        'context-type' : 'multipart/form-data'
      }
    }
    axios.post(url,formData,config).then((req)=>{console.log(req)})
    .then((req)=>{console.log(req)})
    .catch((err)=>{console.log(err)});
    
  }
//-------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div id="title" className="as">signup</div>
      <CusBtn href="/Signin" location="로그인페이지로 이동" />
      
      <div className="Signup">
        <div className="Signup_center">

          <form method="post">
  
            <input type="number" name = "age" placeholder="age" id="age" defaultValue={state.age}/>

            <input type="text" name = "id" placeholder="id" id="id" defaultValue={state.id}/>

            <input type="text" name = "info" placeholder="자기소개" id="info" defaultValue={state.info}/>

            <input type={passwordType.type} name = "password" placeholder="password" onChange={(e)=>{setPass(e.target.p1alue); passCh22()}} p1alue={pass} id="password" defaultValue={state.password}/>

            <span onClick={handlePasswordType}>
            	{  passwordType.visible ? <span>숨기기</span> : <span>보이기</span>  }
            </span>

            <input type="password" name = "password" placeholder="check password"  onChange={(e)=>{setPassCh(e.target.p1alue);}} p1alue={passCh}/>

            <input type="text" name="stac" placeholder="stac" id="stac" defaultValue={state.stac}/>

            <input id="profileimage" type='file' name="profileimage" accept='image/jpg,impge/png,image/jpeg' onChange={onChange}>
            </input>
            <img src={onChange.file} alt="프로필 사진" height="200"></img>
            <button type="button" onClick={handleJoin} name ="회원가입">올리기</button>

          </form>

        </div>
      </div>
        
        
      
      
    </>
    
  );
}

export default Signup;
