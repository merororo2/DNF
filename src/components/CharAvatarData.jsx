import React, { useEffect, useState } from "react";
import axios from "axios";
import CharAvartaView from "./CharAvartaView";

function CharAvatarData() {
  const params = new URLSearchParams(window.location.search);
  let serverNames = params.get("serverName");
  let charName = params.get("chartersId");
  const [charAvatar, setCharAvatar] = useState([]);

  let loop = "";

  let body = {
    addr:
      "https://api.neople.co.kr/df/servers/" +
      serverNames +
      "/characters/" +
      charName +
      "/equip/avatar?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };

  useEffect(() => {
    if (loop !== "1") {
      axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
        setCharAvatar(result.data.avatar);

        loop = "1";
      });
    }
  }, []);
  return <div>{<CharAvartaView avatar={charAvatar} />}</div>;
}
export default CharAvatarData;
