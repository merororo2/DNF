import React, { useEffect } from "react";
import axios from "axios";

function CharItemData() {
  let body = {
    addr: "",
  };

  useEffect(() => {
    const res = axios
      .post("https://dnf-redirect.herokuapp.com", body)
      .then((result) => {});
  }, []);

  return <div>CharItemData</div>;
}

export default CharItemData;
