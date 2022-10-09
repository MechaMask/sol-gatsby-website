import { Link } from 'gatsby'
import React from 'react'
import './navbar.css'

interface PropTypes {
    links: {
        url: string;
        text: string;
    }[]
}

export default function Navbar({links}: PropTypes){
    return(
        <nav className="navbar">
            {
                links.map(link => (
                    <Link className="navbar-link" to={link.url}>{link.text}</Link>
                ))
            }
           
        </nav>
    )
}