import React from "react";
import "../asset/css/status.css"
function ChrStatusView(props) {
  return (
 <div>
    {props.states !== null && (
      <div className="statsInfo">
        
           
        {props.states.map((statusInfo) => (
        <div key={statusInfo.name} className="stateView">
            <div className="statusName" >{statusInfo.name} </div>
            <div className="statusVlaue"> {statusInfo.value}</div>
       </div>            
        ))}
        </div>
        )}




        </div>
     
    
  
    
  );
}

export default ChrStatusView;
