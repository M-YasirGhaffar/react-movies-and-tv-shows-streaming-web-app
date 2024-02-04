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
    <div className="flex max-h-screen">
      <div className="episode-list w-1/4 overflow-y-auto overflow-x-hidden">
        {episodes.map((episode) => (
          <div key={episode.id} onClick={() => setSelectedEpisode(episode)} className="episode-item cursor-pointer p-2 hover:bg-gray-200 hover:text-black border-b-1">
            Episode {episode.episode_number}: {episode.name}
          </div>
        ))}
      </div>
      {selectedEpisode && (
        <div className="movie-player w-3/4">
        {console.log(tvId, seasonNumber, selectedEpisode.episode_number)}
          <iframe
            className="w-full h-screen rounded-xl shadow-2xl"
            // src={`https://embed.smashystream.com/playere.php?tmdb=${tvId}&season=${seasonNumber}&episode=${selectedEpisode.episode_number}`}
            src={`https://multiembed.mov/?video_id=${tvId}&tmdb=1&s=${seasonNumber}&e=${selectedEpisode.episode_number}`}
            allowFullScreen
          ></iframe>
                  {console.log(tvId, seasonNumber, selectedEpisode.episode_number)}
        </div>
      )}
    </div>
  );
};

export default EpisodeList;
