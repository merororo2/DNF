import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CharViewInfo from "./CharViewInfo";
import CharItemData from "./CharItemData";
function CharViewInfoData() {
  const [chardata, setcharData] = useState([]);
  let loop = "";
  const params = new URLSearchParams(window.location.search);

  let charServer = params.get("serverName");
  let charId = params.get("chartersId");

  let body = {
    addr:
      "https://api.neople.co.kr/df/servers/" +
      charServer +
      "/characters/" +
      charId +
      "?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };

  useEffect(() => {
    if (loop !== "1") {
      const res = axios
        .post("https://dnf-redirect.herokuapp.com", body)
        .then((result) => {
          setcharData(result.data);
          loop = "1";
        });
    }
  }, []);

  return <CharViewInfo charData={chardata} />;
}

export default CharViewInfoData;
