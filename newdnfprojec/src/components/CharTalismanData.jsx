import React, { useEffect, useState } from "react";
import axios from "axios";
import CharTalismanView from "./CharTalismanView";

function CharTalismanData() {
  const [talisman, setTalisman] = useState([]);
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
      "/equip/talisman?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };
  useEffect(() => {
    if (loop !== "1") {
      axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
        setTalisman(result.data.talismans);
        loop = "1";
      });
    }
  }, []);

  return <CharTalismanView talisman={talisman} />;
}

export default CharTalismanData;
