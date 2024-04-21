import React from 'react'
import { ChevronDown } from 'lucide-react'
function Accountbtn(props){
  return (
    <div className='btnback'>
            <ul>
                 <li className='account'>
                      
                      <img style={{height:"40px", width:"40px", borderRadius:"50px"}} src="https://th.bing.com/th/id/OIP.48C1fjm5A4taM6KNeVPyTQHaKI?w=202&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                     <div>
                        <p style={{marginTop:"2px"}}>{props.account}</p>
                        <p style={{color:"#389fff", fontSize:"15px"}}>Intermidiate Student</p>
                      </div>
                      <ChevronDown />
             </li>
            </ul>



    </div>
  )
}

export default Accountbtn