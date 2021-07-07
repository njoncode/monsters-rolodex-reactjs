import React from 'react';
import './App.css';
import {CardList} from './components/CardList';
import {SearchBox} from './components/SearchBox';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
  };
}


componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
    .catch(e => console.log(e))
  }

    handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters =  monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(this.state)
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
