import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      status: '',
      interests: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  addContestant = props => {
    const addPlayer = {
      method: 'POST',
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000),
        name: this.state.name,
        status: this.state.status,
        interests: this.state.interests
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/users', addPlayer)
      .then(response => response.json())
      .then(data => {
        this.props.addContestant( data )
      })
    this.setState({ id: '', name: '', status: '', interests: '' })
  }
  render() {
    return (
      <form className='input-form'>
        <h1>💛 Welcome To Love Island 💛</h1>
        <div>
          <h3>Contestant Name</h3>
          <input type='text' name='name' onChange={this.handleChange} value={this.state.name} placeholder='Name...' />
        </div>
        <div>
          <h3>Contestant Status</h3>
          <input type='text' name='status' onChange={this.handleChange} value={this.state.status} placeholder='Status...' />
        </div>
        <div>
          <h3>Contestant Interests</h3>
          <input type='text' name='interests' onChange={this.handleChange} value={this.state.interests} placeholder='Interests Include...' />
        </div>
        <button className='add-btn' type='button' value='add-contestant' onClick={() => this.addContestant(this.state)}>Put Me in the Game Coach</button>
      </form>
    )
  }
}

export default Form;
