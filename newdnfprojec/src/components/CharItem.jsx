import React from "react";

function CharItem(props) {
  return (
    <div>
      {props.equipment.map((dd) => (
        <div key={dd.slotId} data={dd.slotId}>
          <span className="slotName">{dd.slotName}</span>
          <span className="itemName">
            {dd.itemName}
            <img
              src={`https://img-api.neople.co.kr/df/items/${dd.itemId}`}
              alt="equipImg"
            ></img>
          </span>
        </div>
      ))}
    </div>
  );
  // return <div>{props.equipment.equipment.map((dd) => console.log(dd))}</div>;
}

export default CharItem;
