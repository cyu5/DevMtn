import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palindrome: '',
            userInput: ''
        }
        this.takeInput = this.takeInput.bind(this);
        this.testInput = this.testInput.bind(this);
    }

    takeInput(event) {
        console.log(this.state);
        this.setState({
            userInput: event.target.value
        });
    }

    testInput() {
        let str = this.state.userInput;
        let isPalindrome = str === str.split('').reverse().join('');
        let palindrome = isPalindrome ? 'true' : 'false';
        this.setState({
            palindrome: palindrome
        });
    }
 
    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.takeInput}/>
                <button className="confirmationButton" onClick={this.testInput}>Check</button>
                <span className="resultsBox palindromeRB">Palindrome: {this.state.palindrome}</span>
            </div>
        );
    }
}

export default Palindrome;