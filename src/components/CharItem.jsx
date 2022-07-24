import React from "react";
import "../asset/css/item.css"
function CharItem(props) {

    return (
    <div className="itemView">
      <table className="table table-bordered " id="itemViews">
      {props.equipment !== null && (
          <tbody>
           
      {props.equipment.map((items) => (
        <tr key={items.slotId} data={items.slotId} className="itmsflex">
            <td className="">
            <img
              src={`https://img-api.neople.co.kr/df/items/${items.itemId}`}
              alt="equipImg"
            />
         </td>
       
          <td className="w-25">
          {items.slotName}
            </td>
            <td className="w-100">
            
           <strong>{items.itemName}</strong>  
         
            {/* {items.enchant.status.map((enchant)=> (
            
              <small key={enchant.name} className="enchant">{enchant.name} : {enchant.value}</small>
            ))}
             */}
           
         </td>
        </tr>
       
      ))}
     
      </tbody>
      )}
      </table>
    </div>
  );
  // return <div>{props.equipment.equipment.map((dd) => console.log(dd))}</div>;
}

export default CharItem;
