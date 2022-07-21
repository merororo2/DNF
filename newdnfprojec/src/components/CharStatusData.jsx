import React, { useEffect, useState } from "react";
import axios from "axios";
import ChrStatusView from "./ChrStatusView";

function CharStatusData() {
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
  const [charState, setcharState] = useState([]);
  let loop = "";
  let body = {
    addr:
      "https://api.neople.co.kr/df/servers/" +
      serverNames +
      "/characters/" +
      charName +
      "/status?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };
  useEffect(() => {
    if (loop !== "1") {
      axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
        setcharState(result.data.status);
        loop = "1";
      });
    }
  }, []);

  return <div>{<ChrStatusView states={charState} />}</div>;
}

export default CharStatusData;
