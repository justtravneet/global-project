import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Frames from './Frames'

const Template = () => {
  return (
    <div style={{justifyContent:"space-around", flexWrap:"wrap"}} className='tempback d-flex '>
         <div>
           <div className='live'>
               <h2 style={{marginTop:"50px",paddingTop:"50px", padding:"8px", fontFamily:"sans-serif", color:'white'}}>Hi Himanshi,Live lectures is not started yet.</h2>
               <p style={{fontSize:"13px", marginTop:"2px", fontFamily:"sans-serif", color:'white'}}>Live lecture link is not generated.Please try after some time or reach out to <br /> our support team.</p>

               <br />
               <button style={{padding:"10px", width:"120px", borderRadius:"50px", border:"none" }}>Refresh</button>
           </div>
           <div className='d-flex arrow' style={{gap:"390px"}}>
                <div style={{marginTop:"20px",color:"black"}} className='d-flex'>
                <ChevronLeft /> 
                <p style={{fontSize:"19px"}}>Previous</p>
                </div>
                <div style={{marginTop:"20px",color:"black"}} className='d-flex'>
                <p style={{fontSize:"18px"}}>Next</p>
                <ChevronRight /> 
                </div>
           </div>




           <div className='d-flex wire' style={{gap:"30px"}}>
                <div style={{color:"#494e52", fontSize:"19px", fontFamily:"sans-serif"}}>
                  <p style={{marginLeft:"25px",marginTop:"25px"}}>Major Assignments 12-Paper <br />wireframes</p>
                </div>
                <div style={{color:"#494e52", fontSize:"13px", fontFamily:"sans-serif"}}>
                  <p style={{marginLeft:"25px",marginTop:"25px"}}>10th Dec 2024 | lecture by Mukta <br /> soni</p>
                </div>
           </div>
           




          </div>
           <div className='scroll'>
              <p style={{fontFamily:"sans-serif", fontSize:"20px", marginTop:"20px"}}>COURSE TIMELINE</p>
              <div style={{gap:"80px", padding:"10px", background:"#4d9de3", marginTop:"10px"}} className='d-flex'>
                <p style={{fontSize:"18px", fontFamily:"sans-serif"}}>Your Progress</p>
                <p style={{fontSize:"18px",fontFamily:"sans-serif"}}>0%</p>
              </div>

              <div style={{alignItems:"center"}} className='d-flex'>
                <div style={{background:"rgb(60, 66, 237)", width:"30px", height:"102px",marginTop:"15px", paddingLeft:"5px", writingMode:"vertical-lr", textOrientation:"revert", fontSize:"14px", fontFamily:"sans-serif"
                ,padding:"12px", transform:"rotate(180deg)"}}>
                  EXCERCISE
                </div>
                <div style={{background:"#9fd1fc", height:"100px", width:"100%", marginTop:"10px", paddingTop:"19px", paddingLeft:"5px"}}>
                     <Frames  date="Due 15 June , 2024"/>
                     <Frames text="Major Assignment-12 Paper wireframes" />
                </div>
                  
              </div>

              <div style={{alignItems:"center"}} className='d-flex'>
                <div style={{background:"#8bc441", width:"30px", height:"102px",marginTop:"15px", paddingLeft:"5px", writingMode:"vertical-lr", textOrientation:"revert", fontSize:"14px", fontFamily:"sans-serif"
                ,padding:"12px", transform:"rotate(180deg)"}}>
                  EXCERCISE
                </div>
                <div style={{background:"#9fd1fc", height:"100px", width:"100%", marginTop:"10px", paddingTop:"19px", paddingLeft:"5px"}}>
                     <Frames  date="Due 15 June , 2024"/>
                     <Frames text="Major Assignment-12 Paper wireframes" />
                </div>
                  
              </div>

              <div style={{alignItems:"center"}} className='d-flex'>
                <div style={{background:"transparent", width:"30px", height:"102px",marginTop:"15px", paddingLeft:"5px", writingMode:"vertical-lr", textOrientation:"revert", fontSize:"14px", fontFamily:"sans-serif"
                ,padding:"12px", transform:"rotate(180deg)"}}>
                  
                </div>
                <div style={{background:"transparent", height:"100px", width:"100%", marginTop:"10px", paddingTop:"19px", paddingLeft:"5px"}}>
                     <Frames  date="Weak 1 | 7 July 2024"/>
                     <Frames text="Introduction To UI/UX" />
                </div>
                  
              </div>

              
              <div style={{alignItems:"center"}} className='d-flex'>
                <div style={{background:"#8bc441", width:"30px", height:"102px",marginTop:"15px", paddingLeft:"5px", writingMode:"vertical-lr", textOrientation:"revert", fontSize:"14px", fontFamily:"sans-serif"
                ,padding:"12px", transform:"rotate(180deg)"}}>
                  EXCERCISE
                </div>
                <div style={{background:"#9fd1fc", height:"100px", width:"100%", marginTop:"10px", paddingTop:"19px", paddingLeft:"5px"}}>
                     <Frames  date="Due 15 June , 2024"/>
                     <Frames text="Major Assignment-12 Paper wireframes" />
                </div>
                  
              </div>

              


               



           </div>
    </div>
  )
}

export default Template