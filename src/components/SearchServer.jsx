import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CharSearchForm from "./CharSearchForm";
function SearchServer() {
  const [serverList, setserverList] = useState([]);
  const [loopend, setloopend] = useState();
  let body = {
    addr: "https://api.neople.co.kr/df/servers?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ",
  };

  useEffect(() => {
    axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
      setserverList(result.data.rows);
      setloopend("1");
    });
  }, []);
  // console.log(serverList);
  return <div>{<CharSearchForm serverList={serverList} />}</div>;
}
export default SearchServer;
