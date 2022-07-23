import React from "react";

function CharViewCreature(props) {

  return (
    <div className="creatureInfo">
          {props.creature !== null && undefined && (
        <span>
          <img
            src={`https://img-api.neople.co.kr/df/items/${props.creature.itemId}`}
            alt="flagImg"
          />
          <h3>{props.creature.itemName}</h3>
         
        </span>
      )}
    </div>
  );
}

export default CharViewCreature;
