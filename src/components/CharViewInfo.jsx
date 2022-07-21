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

  function ter() {
    let tf = document.getElementsByTagName("p");

    switch (tf) {
      case "equip":
        return <CharItem />;

      case "crea":
        return <CharCreature />;
      default:
        break;
    }
  }

  return (
    <div className="charInfo">
      <div className=" imgBackGround">
        <img
          src={`https://img-api.neople.co.kr/df/servers/${serverNames}/characters/${charName}?zoom=1`}
          alt=""
          className="charImg"
        />
      </div>
      <span className="charLevel">레벨 : {charDatas.level}</span>
      <span className="charGrowName">각성명 : {charDatas.jobGrowName}</span>
      <span className="charJobName"> 직업 : {charDatas.jobName}</span>
      <span className="charGuildName">길드 : {charDatas.guildName} </span>
      <span className="charAdvenName">모험단 : {charDatas.adventureName}</span>
      {/* 
      <p id="equip" onClick={ter}>
        equip
      </p>
      <p id="crea" onClick={ter}>
        크리쳐
      </p> */}

      {/* <CharStatus /> */}
      <CharAvatar />
      {/* <CharCreature /> */}
      {/* <CharFlag /> */}
      {/* <CharTalisman /> */}
    </div>
  );
}

export default CharViewInfo;
