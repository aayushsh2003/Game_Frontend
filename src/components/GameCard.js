import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

function GameCard({ game }) {
  return (
    <div className="card">
      <img src={game.image} alt={game.title} className="card-image" />
      <h2 className="card-title">{game.title}</h2>
      <p className="card-description">{game.description}</p>
      <Link to={`/game/${game.id}`} className="view-details-link">View Details</Link>
    </div>
  );
}

export default GameCard;