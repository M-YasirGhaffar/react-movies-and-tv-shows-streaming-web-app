import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodeList = ({ tvId, seasonNumber }) => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${apiKey}`);
        setEpisodes(response.data.episodes);
        if (response.data.episodes.length > 0) {
          // Automatically select the first episode if episodes are available
          setSelectedEpisode(response.data.episodes[0]);
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    fetchEpisodes();
  }, [tvId, seasonNumber]);

  return (
    <div className="flex">
      <div className="episode-list w-1/4 overflow-y-auto">
        {episodes.map((episode) => (
          <div key={episode.id} onClick={() => setSelectedEpisode(episode)} className="episode-item cursor-pointer p-2 hover:bg-gray-200">
            {episode.name}
          </div>
        ))}
      </div>
      {selectedEpisode && (
        <div className="movie-player w-3/4">
        {console.log(tvId, seasonNumber, selectedEpisode.episode_number)}
          <iframe
            className="w-full h-full rounded-xl shadow-2xl"
            // src={`https://embed.smashystream.com/playere.php?tmdb=${tvId}&season=${seasonNumber}&episode=${selectedEpisode.episode_number}`}
            src={`https://www.2embed.cc/embedtv/${tvId}s=${seasonNumber}&e=${selectedEpisode.episode_number}`}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default EpisodeList;
