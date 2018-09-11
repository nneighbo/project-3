import React from 'react';

import { Link } from "react-router-dom";

import profile from './temp/doge.jpg';
// import arrow from '../icons/arrow_down.svg'
import './NavSide.css';
import API from "../../utils/API"

class NavSide extends React.Component {
    state = {
        user:""
    };

    componentDidMount(){
        this.getuser()
    }

    getuser = ()=>{
        API.getuser().then(res=>{
            let user= res.data.email
            if(this.state.user !== user && user !== undefined){
                this.setState({user:user})
                console.log(user)
            }
        }).catch(err => console.log(err));
    }

    logout= ()=>{
        API.logout()
    }
 
    
    render() {
        this.getuser()
        return (
            <div>
                <div className="logo">
                    <p>STOCKS AND INFO</p>
                </div>
                <div className="nav-content">
                {this.state.user==="" ? (
                <div>
                    <div className="account-container">
                        <div className="account">
                            <a href="/login">Login</a>
                        </div>
                        <div className="account">
                            <a href="/create">Create Account</a>
                        </div>
                    </div>
                </div>
                ) : (
                <div>
                    <div className="user">
                        <img id="img-profile" src={profile} alt="profile" />
                        <p>{this.state.user}</p>
                    </div>
                    <div className="account">
                        <a href="/" onClick={this.logout}>Logout</a>
                    </div>
                </div>
                )}
                    {this.props.items.navItems.map((element) => (
                        <Link key={element.key} to={`/${element.key}`}>
                            <div key={element.key} className="menu-item">
                                <img src={element.icon} alt="menu icon" className="menu-icon" />
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