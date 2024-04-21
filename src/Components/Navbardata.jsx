import React from 'react'

function Navbardata(props) {
  return (
    <div>
         <p>{props.icon}</p>
         <p style={{fontSize:"15px"}}>{props.name}</p>
    </div>
  )
}

export default Navbardata