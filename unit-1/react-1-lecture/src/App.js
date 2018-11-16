import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cheng',
      image: 'https://http.cat/404',
      friends: [
				{
					name: "John",
					image: "https://http.cat/200"
				}
      ]
		};
		this.updateName = this.updateName.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.addFriend = this.addFriend.bind(this);
	}
	
	updateName(event) {
		this.setState({
			name: event.target.value
		});
	}

	updateImage(event) {
		this.setState({
			name: event.target.value
		});
	}

	addFriend() {
		const newFriend = {
			name: this.state.name,
			image: this.state.image
		}	

		const friendsCopy = this.state.friends.slice();
		friendsCopy.push(newFriend);
		this.setState({
			friends: friendsCopy,
			name: '',
			image: ''
		})
		console.log(friendsCopy)
	}

  render() {
		console.log(this.state);

    return (
      <div className="App App-header">
        {/* <img src={logo} className="App-logo" /> */}
        <h1>Friends app</h1>
        <div>
            <h2>Add friend</h2>
            <p>Name: <input value={this.state.name} onChange={this.updateName}/></p>
            <p>Picture: <input value={this.state.image} onChange={this.updateImage}/></p>
            <button onClick={this.addFriend}>Add friend to list</button>
        </div>
        <div>
          {this.state.friends.map((e, index) => {
            return (
              <div key={index}>
                <span>Name: {e.name}</span>
                <img src={e.image} alt="" />
              </div>
            );
          })}
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
