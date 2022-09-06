import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <>

        <nav style ={{display: "inline-block"}} >
          <div>
            <ul >
            <li style={{padding: "25px", display: "inline-block" }}><NavLink to='/'> <h2>  HOME</h2> </NavLink> </li>
              <li style={{padding: "25px", display: "inline-block" }}>   <NavLink to='/aboutus'>  <h2>  About Us </h2> </NavLink> </li>
              
              <li style={{padding: "25px", display: "inline-block" }}>   <NavLink to='/teams'>  <h2> Teams </h2> </NavLink> </li>

              </ul>
              </div>
           

        </nav>
        
        
    </>
  )
}

export default NavBar
