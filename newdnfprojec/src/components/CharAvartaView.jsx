import React from "react";

function CharAvartaView(props) {
  console.log(props.avatar);
  return (
    <div>
      {props.avatar.map((avatars) => (
        <div key={avatars.slotId}>
          <span>{avatars.slotName}</span>
          <img
            src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`}
          ></img>
          <span>{avatars.itemName}</span>
          <span>{}</span>
        </div>
      ))}
    </div>
  );
}

export default CharAvartaView;
