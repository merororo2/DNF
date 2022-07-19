import React, { useEffect, useState } from "react";
import axios from "axios";
import ChrStatusView from "./ChrStatusView";

function CharStatus() {
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
  const [charState, setcharState] = useState([]);
  const [loop, setLoop] = useState();
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
      const res = axios
        .post("https://dnf-redirect.herokuapp.com", body)
        .then((result) => {
          setcharState(result.data.status);
          setLoop("1");
        });
    }
  }, []);

  return <div>{<ChrStatusView states={charState} />}</div>;
}

export default CharStatus;
