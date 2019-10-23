import React, { Component } from 'react'
import PokeCard from './PokeCard'
import './PokeDex.css'

export default class PokeDex extends Component {

  render() {
    let title
    if (this.props.isWinner) {
      title = <h1 className='PokeDex-winner'>Winning Hand</h1>
    } else {
      title = <h1 className='PokeDex-loser'>Losing Hand</h1>
    }
    return (
      <div className='PokeDex'>
        {title}
        <p>Total experience {this.props.exp}</p>
        <div className='PokeDex-card'>
          {this.props.pokemon.map(p => (
            <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    )
  }
}
