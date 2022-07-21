import React from "react";

function CharViewCreature(props) {
  return (
    <div className="creatureInfo">
      <span>
        <img
          src={`https://img-api.neople.co.kr/df/items/${props.creature.itemId}`}
          alt=""
        />
      </span>
      <p>{props.creature.itemName}</p>
    </div>
  );
}

export default CharViewCreature;
