import React from "react";
import "../asset/css/charView.css";
function CharView(props) {
  return (
    <div className="charViewList">
      {props.charId.map((charInfo) => (
        <div
          className="characterCardContainer"
          key={charInfo.characterId}
          data-id={charInfo.characterId}
          data-server={charInfo.serverId}
        >
          <div className="charView">
            <a
              href={`/CharViewInfo?serverName=${charInfo.serverId}&chartersId=${charInfo.characterId}`}
            >
              <img
                src={`https://img-api.neople.co.kr/df/servers/${charInfo.serverId}/characters/${charInfo.characterId}?zoom=1`}
                alt=""
                className="charImg"
              />
            </a>
            <h2>{charInfo.characterName}</h2>
            <i>{charInfo.jobName}</i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharView;
