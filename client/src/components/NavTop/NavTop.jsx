import React from 'react'
import './NavTop.css'
import { withRouter } from "react-router-dom";

class NavTop extends React.Component {
    state = {
        symbol: "",
        toSearch: false
    }

    handleInputChange = event => {
        let value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/search/${this.state.symbol}`)
    }

    render() {
        console.log("on nav",this.state.symbol)
        return (
            <div className="nav-top">
                <div>
                </div>
                <div className="search-container">
                    <form action="search" onSubmit={this.handleFormSubmit}>
                        <input
                            name="symbol"
                            type="text"
                            placeholder="Search for a stock..."
                            autoComplete="off"
                            value={this.state.symbol}
                            onChange={this.handleInputChange}
                        />
                        <img src="./icons/search.png" alt="" />
                    </form>
                </div>
            </div>)
    }
}

export default withRouter(NavTop);