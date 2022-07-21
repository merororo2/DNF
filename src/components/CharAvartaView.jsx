import React from "react";
import "../asset/css/avatar.css";
function CharAvartaView(props) {
  return (
    <div className="avatarInfo">
      {props.avatar.map((avatars) => (
        <div key={avatars.slotId} className="avatars">
          <img
            src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`}
            className="avatarImg"
          />
          <span>{avatars.itemName}</span>
          <span>{avatars.optionAbility}</span>
        </div>
      ))}
    </div>
  );
}

export default CharAvartaView;
