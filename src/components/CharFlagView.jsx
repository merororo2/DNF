import React from "react";

function CharFlagView(props) {
  // const imgUri =
  //   props.flag.itemId !== undefined
  //     ? `https://img-api.neople.co.kr/df/items/${props.flag.itemId}`
  //     : "as";
  return (
    <div className="flagInfo">
      {props.flag.itemId !== undefined && (
        <span>
          <img
            src={`https://img-api.neople.co.kr/df/items/${props.flag.itemId}`}
            alt="flagImg"
          />
          <h3>{props.flag.itemName}</h3>
          <i>{props.flag.itemAbility}</i>
        </span>
      )}
    </div>
  );
}

export default CharFlagView;
