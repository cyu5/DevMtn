import React, { Component } from 'react';

class Sum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            num1: 0,
            num2: 0,
        }
        this.updateNum1 = this.updateNum1.bind(this);
        this.updateNum2 = this.updateNum2.bind(this);
        this.addNums = this.addNums.bind(this);
    }

    updateNum1(event) {
        this.setState({
            num1: event.target.value
        });
    }

    updateNum2(event) {
        this.setState({
            num2: event.target.value
        });
    }

    addNums() {
        this.setState({
            sum: Number(this.state.num1) + Number(this.state.num2)
        })
    }
 
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.updateNum1}/>
                <input className="inputLine" onChange={this.updateNum2}/>
                <button className="confirmationButton" onClick={this.addNums}>Check</button>
                <span className="resultsBox sumRB">sum: {this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;