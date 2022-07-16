import React from 'react'
import "../asset/css/charView.css"
function CharView(props) {
  return (
    <div className="charViewList">
       {props.charId.map((charInfo) => (
        console.log(charInfo.characterId),
        console.log(charInfo.serverId),
            <div key={charInfo.characterId} className="charView">
                
                <img src={`https://img-api.neople.co.kr/df/servers/${charInfo.serverId}/characters/${charInfo.characterId}?zoom=1`} alt="" />
              <p>{ charInfo.characterName}</p>  
              <p>{charInfo.jobGrowName}</p>
        </div>

      
       ))}
        
      </div>
  )
}

export default CharView
