import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css';

function NavBar(){

    return (    
        <nav className="nav">
          <Link to="/" className="site-title">Home</Link>
          <ul>
            <Link to="/mainform">MainForm</Link>
            <Link to="/moviesbar">Movies</Link>
          </ul>
        </nav>
      )
}

export default NavBar