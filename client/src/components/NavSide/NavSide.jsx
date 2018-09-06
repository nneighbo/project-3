import React from 'react';

import { Link } from "react-router-dom"; 

import profile from './temp/doge.jpg';
import arrow from '../icons/arrow_down.svg'
import './NavSide.css';

class NavSide extends React.Component {

    render() {
        return (
            <div>
                <div className="logo">
                    <p>STOCKS AND INFO</p>
                </div>
                <div className="nav-content">
                    <div className="user">
                        <img id="img-profile" src={profile} alt="profile" />
                        <p>Current User</p>
                        <img id="img-arrow" src={arrow} alt="arrow" />
                    </div>

                    {this.props.items.navItems.map((element) => (
                        <Link to={`/${element.key}`}>
                        <div key={element.key} className="menu-item">
                            <img src={element.icon} alt="menu icon" className="menu-icon"/>
                            <p className="menu-label">{element.page}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default NavSide;