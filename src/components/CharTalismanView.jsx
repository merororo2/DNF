import React, { useEffect } from "react";

import "../asset/css/runes.css"
function CharTalismanView(props) {
  return (
   
      <table className="table table-bordered">
        <tbody>
      {props.talisman !== null &&
        props.talisman !== [] &&
        props.talisman.map((talis) => (
         
            <tr key={talis.talisman.itemId} className="talisman">
              <td className="w-50">
            <img
              src={`https://img-api.neople.co.kr/df/items/${talis.talisman.itemId}`}
              alt=""
            />
            </td>
            <td className="w-100">
           {talis.talisman.itemName}
            {talis.runes.map((runes)=> (
            <span key={runes.itemId} className="runes">
            <small>{runes.itemName}</small>
            </span>
           
          ))}
            </td>
            </tr>
         
        ))}
        
         </tbody>
      </table>
  
  );
}

export default CharTalismanView;
