import React from "react";

function CharItem(props) {
  return (
    <div>
      {props.equipment.map((dd) => (
        <div key={dd.slotId} data={dd.slotId}>
          <img
            src={`https://img-api.neople.co.kr/df/items/${dd.itemId}`}
            alt="equipImg"
          ></img>
          <p>{dd.slotName}</p>
          <p>{dd.itemName}</p>
        </div>
      ))}
    </div>
  );
  // return <div>{props.equipment.equipment.map((dd) => console.log(dd))}</div>;
}

export default CharItem;
