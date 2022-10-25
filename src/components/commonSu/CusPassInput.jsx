import React,{useState} from 'react'


const CusPassInput = ({type, placeholder1, placeholder2 }) => {
    const [pass, setPass] = useState("");
    const [passCh, setPassCh] = useState("");
    //const [change,setChange] = useState("");

    let tf = (true);
    if(tf == true){
        Tru();
    }
    else{
        Fal();
    }

    setTimeout(() => {
        if(pass == passCh){
            console.log("qqwrqgegnoevvenovonf");
            //변수를 true로 바꾼ㅁ
            tf = true;
        }
        else {
            //변수를 else로 바꾼ㅁ
            tf = false;
        }
    }, 0);

  return (
    <>
    <input type={type} placeholder={placeholder1} onChange={(e)=>setPass(e.target.value)} value={pass}/>
    <input type={type} placeholder={placeholder2} onChange={(e)=>{setPassCh(e.target.value);}} value={passCh}/>

    </>
  )
}
const  Tru = () => {
    return(
        <div>
            password is same
        </div>
    )
};







export default CusPassInput