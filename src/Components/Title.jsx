import React from 'react'
import { Bell ,Hand,MessageSquareMore } from 'lucide-react'
import Accountbtn from './Accountbtn'
import Template from './Template'

const Title = () => {
  return (
    <div className='title'>
        <div className='upper'>
          <div>
            <ul>
              <li className='titles'><h3 style={{fontSize:"23px" , fontFamily:"sans-serif" , color:"#63a0eb"}}>Global Community Portal</h3></li>
             <li className='titles'><h3 style={{fontSize:"15px" , fontFamily:"sans-serif" , color:"#8fcdff"}}>BATCH: WE[OCT 24] A</h3></li>
            </ul>
          </div>

          <div style={{gap:"20px"}} className='d-flex align-item-centre'>
               <div  className='icons'>
                  {/* <Bell/>
                  <Hand />
                  <MessageSquareMore /> */}
               </div>

               <div>
                   <Accountbtn  account="Himanshi"/>
               </div>

          </div>
        </div>

        <div className='down'>
              <Template />
        </div>

        
    </div>
  )
}

export default Title