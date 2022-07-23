import React from "react";
import "../asset/css/item.css"
function CharItem(props) {
  return (
    <div>
      <table className="table table-bordered">
          <tbody>
      {props.equipment.map((dd) => (
        
        <tr key={dd.slotId} data={dd.slotId}>
            <td>
            <img
              src={`https://img-api.neople.co.kr/df/items/${dd.itemId}`}
              alt="equipImg"
            />
         
            </td>
          
          <td className="slotName">{dd.slotName}</td>
          <td className="itemName">  <strong>{dd.itemName}</strong>  

            {dd.enchant.status.map((aa)=> (
            
              <small key={aa.name} className="enchant">{aa.name} : {aa.value}</small>
            ))}
             
            
              
       
         </td>
        
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
  // return <div>{props.equipment.equipment.map((dd) => console.log(dd))}</div>;
}

export default CharItem;
