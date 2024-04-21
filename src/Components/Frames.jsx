import React from 'react'

function Frames (props) {
  return (
    <div>
        <p style={{color:"#516b82", fontFamily:"sans-serif", fontSize:"14px"}}>{props.date}</p>
        <p style={{color:"black", fontFamily:"sans-serif"}}>{props.text}</p>
    </div>
  )
}

export default Frames