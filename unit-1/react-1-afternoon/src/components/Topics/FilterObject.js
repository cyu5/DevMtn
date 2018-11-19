import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unFilteredArray: [
                { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
                { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
                { "name": "Carly Armstrong", "title": "CEO" }
            ],
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
        let prop = this.state.userInput;
        let filteredArray = this.state.unFilteredArray.filter((elem) => {
            return elem.hasOwnProperty(prop);
        });
        this.setState({
            filteredArray: filteredArray
        })

    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.takeInput}/>
                <button className="confirmationButton" onClick={this.filterInput}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject;