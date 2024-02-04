import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeasonsAndEpisodes = ({ seasons, tvId }) => {
    const maxSeasonNumber = Math.max(...seasons.map(season => season.season_number));
    const validSeasonNumbers = Array.from({ length: maxSeasonNumber }, (_, i) => i + 1);

    const [selectedSeason, setSelectedSeason] = useState(1);
    const [episodes, setEpisodes] = useState([]);
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            const apiKey = import.meta.env.VITE_TMDB_API_KEY;
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${selectedSeason}?api_key=${apiKey}`);
                setEpisodes(response.data.episodes);
                setSelectedEpisode(response.data.episodes.length > 0 ? response.data.episodes[0] : null);
                setSelectedEpisodeId(response.data.episodes.length > 0 ? response.data.episodes[0].id : null);
            } catch (error) {
                console.error("Error fetching episodes:", error);
            }
        };

        fetchEpisodes();
    }, [tvId, selectedSeason]);

    return (
        <div className="flex flex-col bg-[#111111] text-gray-200 max-h-screen">
            <div className="flex justify-start items-center">
                
                <select
                    onChange={(e) => setSelectedSeason(Number(e.target.value))}
                    className="sm:w-1/4 w-full px-2 sm:px-4 py-1 sm:py-2 border-b border-gray-200 shadow bg-[#111111] text-gray-200 cursor-pointer 
                    rounded-md
                    focus:outline-none hover:bg-gray-800 text-xl 
                    "
                >
                    {validSeasonNumbers.map((seasonNumber) => (
                        <option key={seasonNumber} value={seasonNumber}>
                            Season {seasonNumber}
                        </option>
                    ))}
                </select>

                <div className=" w-full sm:w-3/4 text-center py-1 sm:py-3">
                    {selectedEpisode ? (
                        <h2 className="sm:text-xl text-md font-thin sm:font-semibold">{selectedEpisode.name}</h2>
                    ) : (
                        <h2 className="sm:text-xl text-md font-thin sm:font-semibold">Select an episode</h2>
                    )}
                </div>
            </div>
            <div className="flex flex-1 overflow-hidden sm:flex-row flex-col font-thin sm:font-semibold">
                <div className="episode-list sm:w-1/4 w-full overflow-y-auto overflow-hidden">
                    {episodes.map((episode) => (
                        <div key={episode.id} onClick={() =>{ 
                            setSelectedEpisode(episode)
                            setSelectedEpisodeId(episode.id);
                        }}
                        className={`episode-item cursor-pointer p-2 px-5 hover:bg-gray-700 ${selectedEpisodeId === episode.id ? 'bg-gray-800 text-cyan-300' : 'text-gray-200'}`}>
                            Episode {episode.episode_number}: {episode.name}
                        </div>
                    ))}
                </div>
                {selectedEpisode && (
                    <div className="movie-player  sm:w-3/4 w-full z-[50]">
                        <iframe
                            className="w-full h-full z-[50]"
                            src={`https://multiembed.mov/?video_id=${tvId}&tmdb=1&s=${selectedSeason}&e=${selectedEpisode.episode_number}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SeasonsAndEpisodes;
