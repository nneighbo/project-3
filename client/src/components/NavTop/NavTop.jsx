import React from 'react'
import './NavTop.css'

const NavTop = () => (
    <div className="nav-top">
        <div className="search-container">
            <form action="submit">
                <input type="text" placeholder="Search for a stock..."/>
                <img src="./icons/search.png" alt=""/>
            </form>
        </div>
    </div>
)

export default NavTop;