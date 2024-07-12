import React from 'react'
import { NavLink } from 'react-router-dom'

const Nabvar = () => {
    return (
        <nav>
            <ul className='nav-ul'>
                <NavLink to="/" className='nav-link' >Home</NavLink>
                <NavLink to="/about" className='nav-link' >About</NavLink>
                <NavLink to="/add-blog" className='nav-link' >Add-Blog</NavLink>
            </ul>
        </nav>
    )
}

export default Nabvar