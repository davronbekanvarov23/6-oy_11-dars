import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='bg-slate-100'>
      <div className="align-content navbar">
        <div className='navbar-start'><Link to="/" className='font-bold text-3xl'>MyBook</Link></div>
        <div className='navbar-center '>2</div>
        <div className='navbar-end'>3</div>
      </div>
    </nav>
  )
}

export default Navbar