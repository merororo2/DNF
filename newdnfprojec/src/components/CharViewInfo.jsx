import React from "react";
import "../asset/css/charView.css";
import Test from "./Test";
import Test1 from "./Test1";
function CharViewInfo(props) {
  const charDatas = props.charData;
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");



let menus = document.getElementsByClassName("dd");



switch (menus) {
  case 'equip':
    return <Test/>
    break;
  case 'tarisman':
    return <Test1/>

  default:
    break;
}
  return (
    <div className="charInfo">
      <div className=" imgBakGround">
        <img
          src={`https://img-api.neople.co.kr/df/servers/${serverNames}/characters/${charName}?zoom=1`}
          alt=""
          className="charImg"
        />
      </div>
      <span>레벨 : {charDatas.level}</span>
      <span>각성명 : {charDatas.jobGrowName}</span>
      <span> 직업 : {charDatas.jobName}</span>
      <b>길드 : {charDatas.guildName} </b>
      <b>모험단 : {charDatas.adventureName}</b>


    <ul className="nav">
      <li id="equip"><a href="#">장비</a></li>
      <li id="talrisman"><a href="#">탈리스만</a></li>
      <li id="skills"><a href="#">스킬</a></li>
      <li id="avatar"><a href="#">아바타</a></li>
    </ul>



    </div>
  );
}

export default CharViewInfo;
