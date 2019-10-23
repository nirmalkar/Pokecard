
import React, { Component } from 'react'


const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className='PokCard'>
        <h1>{this.props.name}{this.props.id}</h1>
        <img src={imgSrc} alt={this.props.name} />
      </div>
    )
  }
}
export default PokeCard