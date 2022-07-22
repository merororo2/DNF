import React from "react";
import "../asset/css/avatar.css";
function CharAvartaView(props) {
  
  return (
    <div className="avatarInfo ">
      <table className="table table-bordered ">
        <tbody>
      {props.avatar.map((avatars) => (
        <tr key={avatars.slotId} className="table-light">
      <td>  <img
            src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`}    
          />
      </td>
      <td>{avatars.slotName}</td>
       <td><strong> {avatars.itemName} </strong> - <small>{avatars.optionAbility}</small> </td>
       
        </tr>
      ))}
      </tbody>
        </table>
   
        </div>
  );
}

export default CharAvartaView;
