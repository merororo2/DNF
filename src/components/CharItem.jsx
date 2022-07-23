import React from "react";

function CharItem(props) {
  console.log(props.equipment);
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
          <td className="itemName">  {dd.itemName}</td>
        
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
  // return <div>{props.equipment.equipment.map((dd) => console.log(dd))}</div>;
}

export default CharItem;
