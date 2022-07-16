import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
function SearchServer(){
const [serverList, setserverList] = useState([]);
const [loopend, setloopend] = useState();
let body = {
  addr: "https://api.neople.co.kr/df/servers?apikey=cHQkUm6drsWx83fMwYuK1r0E13Wos2j0",
};

useEffect(() => {
  axios.post("https://dnf-redirect.herokuapp.com", body).then((result) => {
    setserverList(result.data.rows);
    setloopend("1");
  });
}, []);
// console.log(serverList);
return <div>{<SearchForm serverList={serverList} />}</div>;

}
export default SearchServer
