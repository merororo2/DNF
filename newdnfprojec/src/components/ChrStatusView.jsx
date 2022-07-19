import React from "react";

function ChrStatusView(props) {
  return (
    <table border={1}>
      <thead>
        {props.states.map((sd) => (
          <tr key={sd.name}>
            <td>{sd.name}</td>
            <td>{sd.value}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
}

export default ChrStatusView;
