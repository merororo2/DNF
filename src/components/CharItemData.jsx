import React, { useEffect, useState } from "react";
import axios from "axios";
import CharItem from "./CharItem";

function CharItemData() {
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
  const [charItem, setCharItem] = useState([]);
  let loop = "";
  let body = {
    addr:
      "https://api.neople.co.kr/df/servers/" +
      serverNames +
      "/characters/" +
      charName +
      "/equip/equipment?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };

  useEffect(() => {
    if (loop !== "1") {
      axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
        setCharItem(result.data.equipment);

        loop = "1";
      });
    }
  }, []);
  return (
    <div>
      <CharItem equipment={charItem} />
    </div>
  );
}

export default CharItemData;
