import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
        this.takeInput = this.takeInput.bind(this);
        this.splitInput = this.splitInput.bind(this);
    }

    takeInput(event) {
        console.log(this.state);
        this.setState({
            userInput: event.target.value
        });
    }

    splitInput() {
        // take user input
        const inputString = this.state.userInput;

        // convert to numbers arr
        const numArr = inputString.split(',');

        // sort them to even or odd
        let evenNums = [];
        let oddNums = [];
        numArr.forEach(num => {
            num%2 ? oddNums.push(num) : evenNums.push(num);
        })

        // save sorted result into state object
        this.setState({
            evenArray: evenNums,
            oddArray: oddNums
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4 className="title">Evens and Odds</h4>
                <input className="inputLine" onChange={this.takeInput}/>
                <button className="confirmationButton" onClick={this.splitInput}>Split</button>
                <span className="resultsBox">Evens: [{this.state.evenArray.join(',')}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray.join(',')}]</span>
            </div>
        );
    }
}

export default EvenAndOdd;