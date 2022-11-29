import React from "react";
import CusBtn from "./common/locationBtn";
import {Pobtn, Setbtn, ProjectBox} from "./style/MainStyle"
import axios from "axios";
import { useState } from "react";

const ServerGet = (set)=>{
  const serverUrl = "http://10.80.163.160:1080/api/post/infos"
  axios.get(serverUrl).then((e)=>{
    let a = [...e.data.data.content];
    console.log("a : ",a[0]);
    set([...a])
  })
}

const Main = () => {
  let [getServer, setGetServer] = useState([]);
  return (
    <>
      <div>Main</div>
      <CusBtn href="/signin" location="로그인" />
      <CusBtn href="/signup" location="회원가입" />
      <CusBtn href="/createproj" location="만들기" />
      <CusBtn href="/searchproj" location="찾기" />

      <img src="" alt="" />
      <p>포지션</p>
      <nav>
        <header>
        <Pobtn>웹</Pobtn>
        <Pobtn>서버</Pobtn>
        <Pobtn>안드로이드</Pobtn>
        <Pobtn>iOS</Pobtn>
        <Pobtn>게임</Pobtn>
        <nav className="Big_box">
          <p>
              <Setbtn>웹</Setbtn>
              <Setbtn>서버</Setbtn>
              <Setbtn>안드로이드</Setbtn>
              <Setbtn>IOS</Setbtn>
              <Setbtn>게임</Setbtn>
              <Setbtn>디자인</Setbtn>  
          </p>
          <nav>
            <button onClick={()=>{
              ServerGet(setGetServer);
              console.log(getServer);
            }}>dd</button>
            {getServer.map((e, i)=>{
              return <ProjBoxNav title={e.title} stac={e.positionEntity[0].categoryEntity.category_Name} info={e.body} index={i} age={e.age} expected_period={e.expected_period}/>
            })}
          </nav>
        </header>
      </nav>
    </>
  );
};

export default Main;

const ProjBoxNav = (props)=>{
  return (
    <ProjectBox>
      <h2>{props.title}</h2>
      <p>나이 : {props.age}</p>
      <p>스택 : {props.stac}</p>
      <p>예상 기간 : {props.expected_period}</p>
      <p>{props.info}</p>
    </ProjectBox>
  )
}
