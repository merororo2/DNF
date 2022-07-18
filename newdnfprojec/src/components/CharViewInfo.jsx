import React from "react";

function CharViewInfo(props) {
  const charDatas = props.charData;

  console.log(charDatas);

  return (
    <div className="charInfo">
      <b></b>
      <b>길드 : {charDatas.guildName} </b>
      <b>모험단 : {charDatas.adventureName}</b>
    </div>
  );
}

export default CharViewInfo;
