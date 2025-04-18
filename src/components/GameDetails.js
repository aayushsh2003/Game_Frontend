import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './GameDetails.css';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/games`)
      .then((response) => response.json())
      .then((data) => {
        const selectedGame = data.find((g) => g.id === parseInt(id));
        setGame(selectedGame);
      });
  }, [id]);

  if (!game) return <p className="loading">Loading...</p>;

  return (
    <div className="game-details">
      <h1 className="game-title">{game.title}</h1>
      <img className="game-image" src={game.image} alt={game.title} />
      <p className="game-description">{game.description}</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default GameDetails;