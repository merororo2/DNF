import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CharView from './CharView';

function SearchChar() {
    const [charId, setCharId] = useState([]);
    const [loopOut, setloopOut] = useState("");
    const params = new URLSearchParams(window.location.search);
  
    let searchServerName = params.get("serverNames");
    let searchChar = params.get("charSearch");
  
    const encodeCharName = encodeURI(searchChar);
    
  
    let body = {
      addr:
      "https://api.neople.co.kr/df/servers/" +
      searchServerName +
      "/characters?characterName=" +
  
      encodeCharName + 
      "&limit=200&wordType=full&apikey=cHQkUm6drsWx83fMwYuK1r0E13Wos2j0",
    }; 
     
  
    useEffect(() => {
      if (loopOut !== "1") {
        const res = axios
          .post("https://dnf-redirect.herokuapp.com", body)
          .then((result) => {
  
            setCharId(result.data.rows);
            setloopOut("1");
            
          });
        }
    }, []);
  
    return ( <div><CharView charId={charId} /> </div> );
  
  }

export default SearchChar
