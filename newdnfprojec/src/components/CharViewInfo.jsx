import React from "react";
import "../asset/css/charView.css";
import CharAvatar from "./CharAvatarData";
import CharStatus from "./CharStatusData";
import CharItem from "./CharItemData";
import CharCreature from "./CharCreatureData";
import CharFlag from "./CharFlagData";
import CharTalisman from "./CharTalismanData";
function CharViewInfo(props) {
  const charDatas = props.charData;
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
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
      {/* <CharItemData /> */}
      {/* <CharStatus /> */}
      {/* <CharAvatar /> */}
      {/* <CharCreature /> */}
      {/* <CharFlag /> */}
      <CharTalisman />
      <ul className="nav"></ul>
    </div>
  );
}

export default CharViewInfo;
