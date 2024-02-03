import React, { useState } from 'react';
import EpisodeList from './EpisodeList';

const SeasonTabs = ({ seasons, tvId }) => {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]?.season_number);

  return (
    <div className="flex flex-col">
      <div className="season-tabs">
        {seasons.map((season) => (
          <button
            key={season.season_number}
            onClick={() => setSelectedSeason(season.season_number)}
            className={`tab px-4 py-2 m-2 font-bold rounded-md text-black border border-1 ${selectedSeason === season.season_number ? 'active' : ''}`}
          >
            Season {season.season_number}
          </button>
        ))}
      </div>
      <EpisodeList seasonNumber={selectedSeason} tvId={tvId} />
    </div>
  );
};

export default SeasonTabs;
