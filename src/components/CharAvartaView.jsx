import React from "react";
import "../asset/css/avatar.css";
function CharAvartaView(props) {
  
  return (
    <div className="avatarInfo ">
      <table className="table table-bordered ">
        <tbody>
      {props.avatar.map((avatars) => (
        <tr key={avatars.slotId} className="avatarView">
      <td>  <img
            src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`}    
          />
      </td>
      <td className="w-25">{avatars.slotName}</td>
       <td className="w-100"><strong> {avatars.itemName} </strong> <span className="avatarStatus"> <small>{avatars.optionAbility}</small> </span></td>
       
        </tr>
      ))}
      </tbody>
        </table>
   
        </div>
  );
}

export default CharAvartaView;
