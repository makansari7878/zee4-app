import React from 'react'
import { Link } from 'react-router-dom'

function India() {
  return (
    <div>
      <h2> INDIAN tEAM</h2>
      <ul style={{background:"red"}}>
       <Link to='/rohit'> <li>Rohit</li> </Link>
       <Link to='/Kholi'> <li> Kholi</li></Link>
      </ul>
    </div>
  )
}

export default India
