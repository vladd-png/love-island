import React from 'react';

const PlayerCard = props => {
  return (
    <article className='love-card'>
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
      <p>{props.interests}</p>
      <button type='button' className='player-btn' onClick={ () => props.addHeart(props.id) }>Love Me</button>
      <button type='button' className='player-btn' onClick={ () => props.removeContestant(props.id) }>Skip Me</button>
    </article>
  )
}

export default PlayerCard;
