import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import CardContainer from './CardContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contestants: [
        { id: 1, name: 'Leta', status: 'online', interests: 'Cats and Burritos' }
      ]
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ contestants: data })
      })
  }
  addContestant = player => {
    this.setState({ contestants: [...this.state.contestants, player] })
  }
  addHeart = id => {
    let findHearted = this.state.contestants.filter(player => player.id === id);
    console.log(findHearted);
  }
  removeContestant = id => {
    const removePlayer = {
      method: 'DELETE',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch(`http://localhost:3001/api/v1/users/${id}`, removePlayer)
      .then(response => response.json())
      .then(data => {
        this.setState({ contestants: data })
      })
  }
  render() {
    return (
      <div className="App">
        <Form addContestant={this.addContestant}/>
        <CardContainer contestants={this.state.contestants} removeContestant={this.removeContestant} addHeart={this.addHeart} />
      </div>
    )
  }
}

export default App;
