import React, { Component } from 'react'
import PokeCard from './PokeCard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PokeCard
          id={4}
          name='Charmander'
          type='fire'
          exp={62}
        />
      </div>
    )
  }
}
export default App