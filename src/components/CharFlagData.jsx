import React, { useState, useEffect } from "react";
import axios from "axios";
import CharFlagView from "./CharFlagView";

function CharFlagData() {
  const [flag, setFlag] = useState([]);

  const params = new URLSearchParams(window.location.search);

  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");

  let loop = "";

  let body = {
    addr:
      "https://api.neople.co.kr/df/servers/" +
      serverNames +
      "/characters/" +
      charName +
      "/equip/flag?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };

  useEffect(() => {
    if (loop !== "1") {
      axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
        setFlag(result.data.flag);
        loop = "1";
      });
    }
  }, []);

  return <CharFlagView flag={flag} />;
}

export default CharFlagData;
