import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', fruit: 'mango'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    console.log('Entered name is ::'+ this.state.name + 'and Fruit is ::'+ this.state.fruit);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <select name='fruit' value={this.state.fruit} onChange={this.handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default App;
