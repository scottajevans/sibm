import React from 'react';

import { Tag } from './tag.js';

export const Game = ({
  game
}) => {
  const getTags = () => {
    return game.tags.map((tag, index) => {
      const separator = index === game.tags.length - 1 ? " " : ", ";
      return (
        <Tag tag={tag} separator={separator} key={index} />
      );
    })
  }

  const getAltText = () => {
    return `Visit the website ${game.name}`;
  }

  return (
    <div style={{ position: 'absolute', width: '100%' }}>
      <h3>{game.name}</h3>
      <div>
        <a href={game.url}>
          <img src={game.image} alt={getAltText()} className="game-img"></img>
        </a>
      </div>
      <div><p>{getTags()}</p></div>
    </div>
  );
}
