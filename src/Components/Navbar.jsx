import React from 'react'
import {PanelsTopLeft ,GraduationCap ,Waypoints ,FolderKanban ,ShieldCheck ,CalendarSearch ,ArrowDown  } from 'lucide-react'

import Navbardata from './Navbardata'
const Navbar = () => {
  return (
    <div className='backnav'>
        <div className='navlogo'>
            <img src="https://uiuxglobal.com/logo.webp" alt="" />
        </div>
        <div className='packages'>
            <div className='menu'>
                  <ul className='line'>
                      <li className='box'>
                          <PanelsTopLeft />
                          <Navbardata  name="Dashboard"/>
                      </li>
                      <li className='box'>
                          <GraduationCap />
                          <Navbardata  name="My Cources"/>
                      </li>
                      <li className='box'>
                          <Waypoints />
                          <Navbardata  name="Resources"/>
                      </li>
                      <li className='box'>
                          <FolderKanban />
                          <select style={{fontSize:"13px", color:"rgba(66, 64, 64, 0.819)"}} className='options' name="options" value="Projects">
                            <option   value="">Projects</option>
                          </select>
                      </li>
                      <li className='box'>
                          <ShieldCheck />
                          <Navbardata  name="Jury"/>
                      </li>
                      <li className='box'>
                          <CalendarSearch />
                          <Navbardata  name="Certifications"/>
                      </li>
                      <li className='box'>
                          <ArrowDown />
                          <Navbardata  name="calenders"/>
                      </li>
                  </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar