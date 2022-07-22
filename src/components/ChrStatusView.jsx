import React from "react";
import "../asset/css/status.css"
function ChrStatusView(props) {
  return (
    <div className="statusTable">
    <table className=" table table-bordered " id = "tablestatus">
      <thead>
        {props.states.map((sd) => (
          <tr key={sd.name} >
            <td >{sd.name}</td>
            <td>{sd.value}</td>
          </tr>
        ))}
      </thead>
      
    </table>
    </div>
  );
}

export default ChrStatusView;
