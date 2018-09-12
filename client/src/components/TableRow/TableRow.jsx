import React from 'react';
import './TableRow.css';
import API from "../../utils/API"

class TableRow extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }

    state = {
        clickFunc: () => this.saveSym(),
        saved: false,
        buttonLabel: "",
        notSaved: "Save",
        user: {
            id: "",
            coins: [],
            stocks: []
        }
    }

    getuser = () => {
        API.getuser().then(res => {
            let user = res.data._id
            if (this.state.user !== user && user !== undefined) {
                this.setState({
                    user: {
                        id: user
                    }
                })
            }
        })
            .catch(err => console.log(err));
    }


    saveSym = (sym) => {
        console.log(this.props.stockNameShort, "is saved: ", this.props.stockSaved)
        console.log(this.props)
        API.addStock({
            _id: this.state.user,
            stock: this.props.stockNameShort
        }
        )
            .then(req => { console.log("test", req) })
            .catch(error => console.log("error", error.response))
        if (this.props.stockNameShort.includes('USDT')) {
          API.addCoin({
              _id: this.state.user,
              coin: this.props.stockNameShort
          })
                .then(res => {console.log("test coin", res.data)})
                .catch(error => console.log("error", error.response))
        } else {
            API.addStock({
                _id: this.state.user,
                stock: this.props.stockNameShort
            })
                .then(res => { console.log("test stock", res.data) })
                .catch(error => console.log("error", error.response))
        }
    }

    unSaveSym = (sym) => {
        console.log("unsave")
    }

    componentDidMount = () => {
        this.getuser()
        if (this.props.stockSaved === true) {
            this.setState({ clickFunc: () => this.unSaveSym() })
        }
        if (this.props.stockSaved === false) {
            this.setState({ clickFunc: () => this.saveSym() })
        }
        if (this.state.saved === true) {
            this.setState({ buttonLabel: "Saved!" })
        } else if (this.state.saved === false) {
            this.setState({ buttonLabel: "Save" })
        }

    }

    handleClick = () => {

        console.log("clicked")
        this.setState(this.toggleClickState);
    }

    handleMouseIn = () => {
        this.setState(this.toggleHoverState(true));
    }

    handleMouseOut = () => {
        this.setState(this.toggleHoverState(false));
    }

    toggleClickState(state) {
        if (this.state.saved === true) {
            return {
                saved: false, buttonLabel: "Save"
            }
        } else if (this.state.saved === false) {
            return {
                saved: true, buttonLabel: "Saved!"
            }
        }
        
        console.log(this.state.saved)
    }
    
    toggleHoverState(hoverType) {
        if (this.state.saved === true) {

            if (hoverType === true) {
                return {
                        buttonLabel:"Unsave"
                    }
            } else if (hoverType === false) {
                return {
                    buttonLabel:"Saved!"
                }
            }

            if (this.state.saved === "Saved!") {
                return {
                    saved: "Unsave",
                };
            } else if (this.state.saved === "Unsave") {
                return {
                    saved: "Saved!",
                };
            }
        }
    }

    // parseProp sets up all the data based on the props sent to it.

    // data needs to be the prop passed in

    // type doesn't need to be defined, however 
    // you can define 'percent','dollar', or 'button'.
    // the function will determine whether these numbers are negative
    // or positive, and render them accordingly.

    // If type = 'button', it will render the button with the
    // correct class and text based on whether or not the
    // article is saved or not.

    parseProp(data, type) {
        if (isNaN(data) && data !== true && data !== false) {
            return (data);
        } else {
            switch (type) {
                case "button":
                    // if (data === true) {
                    //     return (<button onMouseEnter={this.handleMouseHover}
                    //         onMouseLeave={this.handleMouseHover} onClick={this.handleClick} className="save-stock saved">{this.state.saved}</button>)
                    // } else if (data === false) {
                    //     return (<button className={`save-stock  ${this.state.notSaved === "Saved!"? 'saved': ''}`} onClick={this.handleClick}>{this.state.notSaved}</button>)
                    // }
                    return (<button className={`save-stock  ${this.state.saved === true ? 'saved' : ''}`} onMouseEnter={this.handleMouseIn}
                            onMouseLeave={this.handleMouseOut} onClick={this.handleClick}>{this.state.buttonLabel}</button>)
                    break;
                case "percent":
                case "dollar":
                    if (parseFloat(data) < 0) {
                        if (type === "percent") {
                            return (
                                <span className="neg-text">-{Math.abs((Math.round(parseFloat(data) * 1000) / 1000))}%</span>
                            )
                        } else if (type === "dollar") {
                            return (
                                <span className="neg-text">-${Math.abs((Math.round(data * 100) / 100)).toFixed(2)}</span>
                            )
                        }
                    } else if (parseFloat(data) > 0) {
                        if (type === "percent") {
                            return (
                                <span className="pos-text">{(Math.round(parseFloat(data) * 1000) / 1000)}%</span>
                            )
                        } else if (type === "dollar") {
                            return (
                                <span className="pos-text">${(Math.round(data * 100) / 100).toFixed(2)}</span>
                            )
                        }
                    }
                    break;

                default:
                    return (`$${(Math.round(data * 100) / 100).toFixed(2)}`);
            }
        }
    }

    render() {
        return (
            <tr className="table-row">
                <td>
                    <span className="top-text">
                        {this.parseProp(this.props.stockNameShort)}
                    </span><br></br>
                    {this.parseProp(this.props.stockNameLong)}
                </td>

                <td>
                    {this.parseProp(this.props.stockLastPrice)}
                </td>

                <td>
                    {this.parseProp(this.props.stockOpen)}
                </td>

                <td>
                    {this.parseProp(this.props.stockPrevClose)}
                </td>

                <td>
                    <span className="top-text">
                        {this.parseProp(this.props.stockDayRangeHigh)}
                    </span><br></br>
                    {this.parseProp(this.props.stockDayRangeLow)}
                </td>

                <td>
                    {this.parseProp(this.props.stockDayChangeDollar, "dollar")}
                </td>

                <td>
                    {this.parseProp(this.props.stockDayChangePercent, "percent")}
                </td>
                <td
                    onClick={this.state.clickFunc}
                >
                    {this.parseProp(this.props.stockSaved, "button")}</td>
            </tr>
        )
    }
}

export default TableRow;