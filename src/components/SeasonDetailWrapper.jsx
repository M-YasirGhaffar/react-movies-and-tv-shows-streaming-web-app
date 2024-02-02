// src/components/SeasonDetailWrapper.jsx
import React from 'react';

const SeasonDetailWrapper = ({ seasonData }) => {
  return (
    <div>
      <h2>Season {seasonData.season_number}: {seasonData.name}</h2>
      <ul>
        {seasonData.episodes.map((episode) => (
          <li key={episode.id}>
            <strong>Episode {episode.episode_number}:</strong> {episode.name}
            <p>{episode.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonDetailWrapper;
