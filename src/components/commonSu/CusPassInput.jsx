import React,{useState} from 'react'


const CusPassInput = ({type, placeholder1, placeholder2 }) => {
    const [pass, setPass] = useState("");
    const [passCh, setPassCh] = useState("");
    //const [change,setChange] = useState("");

    let style1 = {
        width : "50px",
        height : "50px",
        background : "green"

    };
    let style2 = {
        width : "50px",
        height : "50px",
        background : "red"

    };
    const fstyle1 = () =>{
        return(
            <div style={{style1}}>asdsadsasad</div>
        )
    };
    const fstyle2 = () =>{
        return(
            <div style={{style2}}>asdsadsasad</div>
        )
    };
    /*
    const Ch = ()=>{
        if(pass == passCh){
            console.log("yfyftfyt");
            return (style1);

        }
        else {
            return (
                <div style={style2}></div>
            );

        }
    }*/

    setTimeout(() => {
        if(pass == passCh){
            console.log("qqwrqgegnoevvenovonf");
            fstyle1();
        }
        else {
            fstyle2();
        }
    }, 0);

  return (
    <>
    <input type={type} placeholder={placeholder1} onChange={(e)=>setPass(e.target.value)} value={pass}/>
    <input type={type} placeholder={placeholder2} onChange={(e)=>{setPassCh(e.target.value);}} value={passCh}/>
    </>
  )
}

export default CusPassInput