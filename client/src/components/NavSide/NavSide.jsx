import React from 'react';

import { Link } from "react-router-dom";

import profile from './temp/doge.jpg';
import arrow from '../icons/arrow_down.svg'
import './NavSide.css';
import API from "../../utils/API"
import AnimateHeight from 'react-animate-height';


class NavSide extends React.Component {
    state = {
        user: "",
        height: 0,
    };

    componentDidMount() {
        this.getuser()
    }


    toggle = () => {
        const { height } = this.state;

        this.setState({
            height: height === 0 ? 'auto' : 0,
        });
    };

    getuser = () => {
        API.getuser().then(res => {
            let user = res.data.email
            if (this.state.user !== user && user !== undefined) {
                this.setState({ user: user })
                console.log(user)
            }
        }).catch(err => console.log(err));
    }

    logout = () => {
        API.logout()
    }


    render() {
        const { height } = this.state;
        this.getuser()
        return (
            <div>
                <div className="logo">
                    <p>STOCKS AND INFO</p>
                </div>
                <div className="nav-content">
                    {this.state.user === "" ? (
                        <div className="account-container">
                            <div>
                                <div className="account-wrapper">
                                    <div className="account">
                                        <a href="/login">Login</a>
                                    </div>
                                    <div className="account">
                                        <a href="/create">Create Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div className="account-container">
                                <div className="user" onClick={this.toggle}>
                                    <img id="img-profile" src={profile} alt="profile" />
                                    <p>{this.state.user}</p>
                                    <img id="img-arrow" src={arrow} alt="arrow" />
                                </div>
                                <AnimateHeight
                                    duration={300}
                                    height={height} // see props documentation bellow
                                >
                                    <div className="account-wrapper">
                                        <div className="account">
                                            <a href="/" onClick={this.logout}>Logout</a>
                                        </div>
                                    </div>
                                </AnimateHeight>
                            </div>
                        )}

                    {/* If the user isn't logged in, display this div below instead */}

                    {/* ---------------------------------------------------- */}

                    {/* {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })} */}

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