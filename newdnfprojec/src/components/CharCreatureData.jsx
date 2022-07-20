import React, { useEffect, useState } from "react";
import axios from "axios";
import CharViewCreature from "./CharViewCreature";

function CharCreatureData() {
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
  const [loop, setLoop] = useState("");
  const [datas, setDatas] = useState([]);

  let body = {
    addr:
      "https://api.neople.co.kr/df/servers/" +
      serverNames +
      "/characters/" +
      charName +
      "/equip/creature?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };

  useEffect(() => {
    if (loop !== "1") {
      const res = axios
        .post("https://dnf-redirect.herokuapp.com", body)
        .then((result) => {
          setDatas(result.data.creature);
          setLoop("1");
        });
    }
  }, []);

  return <CharViewCreature creature={datas} />;
}

export default CharCreatureData;
