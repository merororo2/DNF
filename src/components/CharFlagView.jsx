import React from "react";
import "../asset/css/flag.css"
function CharFlagView(props) {
  // const imgUri =
  //   props.flag.itemId !== undefined
  //     ? `https://img-api.neople.co.kr/df/items/${props.flag.itemId}`
  //     : "as";
  return (
    <div className="flagInfo">
      <table className="table table-bordered">
          <tbody>
      {props.flag.itemId !== undefined && (
       <tr key={props.flag.itemId} className="flag">
        <td className="w-50">
          <img
            src={`https://img-api.neople.co.kr/df/items/${props.flag.itemId}`}
            alt="flagImg"
          />
          </td>
          <td className="w-100"> {props.flag.itemName}     <span className="flagAbility">{props.flag.itemAbility}</span> </td>
    
          </tr>
      )}
      </tbody>
      </table>
    </div>
  );
}

export default CharFlagView;
