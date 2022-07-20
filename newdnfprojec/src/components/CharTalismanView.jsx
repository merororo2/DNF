import React from "react";

function CharTalismanView(props) {
  return (
    <div>
      {props.talisman.map((talis) => (
        <div key={talis.talisman.itemId}>
          <img
            src={`https://img-api.neople.co.kr/df/items/${talis.talisman.itemId}`}
            alt=""
          />
          <span>{talis.talisman.itemName}</span>
        </div>
      ))}
    </div>
  );
}

export default CharTalismanView;
