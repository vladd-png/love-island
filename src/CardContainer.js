import React from 'react';
import PlayerCard from './PlayerCard.js';

const CardContainer = props => {
  let allPlayers = props.contestants.map(player => {
    return <PlayerCard key={player.id} id={player.id} name={player.name} status={player.status} interests={player.interests} removeContestant={props.removeContestant} addHeart={props.addHeart} />
  })
  return (
    <section className='card-container'>
      {allPlayers}
    </section>
  )
}

export default CardContainer;
