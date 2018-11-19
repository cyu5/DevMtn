import React, { Component } from 'react';

class FilterString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            filteredArray: [],
            userInput: ''
        }
        this.takeInput = this.takeInput.bind(this);
        this.filterInput = this.filterInput.bind(this);
    }

    takeInput(event) {
        console.log(this.state);
        this.setState({
            userInput: event.target.value
        });
    }

    filterInput() {
        let startStr = this.state.userInput;
        let filteredArray = this.state.unFilteredArray.filter((elem) => {
            return elem.startsWith(startStr);
        });
        this.setState({
            filteredArray: filteredArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.takeInput}/>
                <button className="confirmationButton" onClick={this.filterInput}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;