import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import './Home.css';

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="home">
      <h1 className="title">Game Library</h1>
      <div className="card-container">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="footer">
        <p>&copy; 2025 Game Library</p>
      </div>
    </div>
  );
}

export default Home;