import React from "react";

function CharAvartaView(props) {
  return (
    <div>
      {props.avatar.map((avatars) => (
        <div key={avatars.slotId}>
          <span>{avatars.slotName}</span>
          <img
            src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`}
          ></img>
          <span>{avatars.itemName}</span>
        </div>
      ))}
    </div>
  );
}

export default CharAvartaView;
