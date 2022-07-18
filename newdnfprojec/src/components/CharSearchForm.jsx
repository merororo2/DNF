import React from "react";

function CharSearchForm(props) {
  return (
    <div>
      <form action="charView" method="get">
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
