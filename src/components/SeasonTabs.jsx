import React, { useState, useEffect } from 'react';
import EpisodeList from './EpisodeList';

const SeasonTabs = ({ seasons, tvId }) => {
  // Find the maximum season number to ensure you cover all seasons.
  const maxSeasonNumber = Math.max(...seasons.map(season => season.season_number));
  
  // Generate an array of valid seasons from 1 to maxSeasonNumber.
  const validSeasonNumbers = Array.from({ length: maxSeasonNumber }, (_, i) => i + 1);
  
  const [selectedSeason, setSelectedSeason] = useState(1); // Default to season 1

  return (
    <div className="flex flex-col bg-[#111111] text-gray-200">
      <div className="season-tabs rounded-lg flex justify-start items-center">
        {validSeasonNumbers.map((seasonNumber) => (
          <button
            key={seasonNumber}
            onClick={() => setSelectedSeason(seasonNumber)}
            className={`tab px-4 py-2 my-3 mx-2 font-bold rounded-md ${selectedSeason === seasonNumber ? 'active' : ''}`}
          >
            Season {seasonNumber}
          </button>
        ))}
      </div>
      <EpisodeList seasonNumber={selectedSeason} tvId={tvId} />
    </div>
  );
};

export default SeasonTabs;
