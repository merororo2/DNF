import React, { useEffect, useState } from "react";
import axios from "axios";
import CharItem from "./CharItem";

function CharItemData() {
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
  const [charItem, setCharItem] = useState([]);
  const [loop, setLoop] = useState();
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
      const res = axios
        .post("https://dnf-redirect.herokuapp.com", body)
        .then((result) => {
          console.log(result.data.equipment);
          setCharItem(result.data.equipment);
          setLoop("1");
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
