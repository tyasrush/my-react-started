import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>First Start with React :  TO DO Case</h2>
        </div>
        <p className="App-intro">
        <Form />
        </p>
      </div>
    );
  }
}

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {items: [], value: ''};
    this.clickListener = this.clickListener.bind(this);
    this.handleInput = this.handleChangeInput.bind(this);
  }

  clickListener(e) {
    var itemArrays = this.state.items;
    itemArrays.push(this.state.value);
    this.setState({ items : itemArrays });
    // alert('Nama : ' + this.state.value);
    event.preventDefault();
  }

  handleChangeInput(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleInput} placeholder="Tambahkan to do"/>
        
        <button onClick={this.clickListener}>Testing button</button>
        <br/><br/>
        <ListItem entries={this.state.items}></ListItem>
      </div>
      );
  }
}

class ListItem extends Component {
  render() {
    var items = this.props.entries;

    function createTasks(item) {
      return <li>{item}</li>
    }

    var listUi = items.map(createTasks);

    return(
      <div>
      <ul>
      {listUi}
      </ul>
      </div>
      );
  }
}

export default App;
