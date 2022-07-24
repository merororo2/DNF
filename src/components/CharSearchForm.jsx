import React from "react";
import "../asset/css/searchForm.css";
function CharSearchForm(props) {
  // function nullTest() {
  //   let nulls = document.getElementById("charSearch").value;

  //   if (nulls !== "") {
  //   } else {
  //     window.location.replace("/");
  //   }
  // }

  return (
    <div className="formsInfo">
      <form action="charView" method="get" className="forms">
        <select name="serverName" id="serverName">
          <option value="all">전체 </option>
          {props.serverList.map((servers) => (
            // console.log(servers)
            <option
              key={servers.serverId}
              name={servers.serverId}
              value={servers.serverId}
            >
              {servers.serverName}
            </option>
          ))}
        </select>
        <input type="search" name="charSearch" id="charSearch" />
        <button>검색</button>
      </form>
    </div>
  );
}

export default CharSearchForm;
