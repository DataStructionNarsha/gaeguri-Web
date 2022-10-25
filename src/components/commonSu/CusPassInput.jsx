import React,{useState} from 'react'

const CusPassInput = ({type, placeholder1, placeholder2 }) => {
    const [pass, setPass] = useState("");
    const [passCh, setPassCh] = useState("");
    //const [change,setChange] = useState("");
    const passChVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

    
    const passCh22 = () =>{
      if(passChVal.test(pass)){
        console.log("형식 O");
      }else{
        console.log("형식 X");
      }
    }

    setTimeout(() => {
        
            if(pass == passCh && pass != ""){
                console.log("success");
            }else{
                console.log('faild');
                
            }
        
        
      }, "1")
  return (
    <>
    <input type={type} placeholder={placeholder1} onChange={(e)=>{setPass(e.target.value); passCh22()}} value={pass}/>
    <input type={type} placeholder={placeholder2} onChange={(e)=>{setPassCh(e.target.value);}} value={passCh}/>

    </>
  )
}







export default CusPassInput