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
        <div className="flex flex-col  dark:bg-[#111111] dark:text-gray-200 h-screen">
            <div className="flex justify-start border-b dark:border-white border-black items-center">
                
                <select
                    onChange={(e) => setSelectedSeason(Number(e.target.value))}
                    className="sm:w-1/4 w-full px-2 sm:px-4 py-1 sm:py-2 shadow-sm dark:shadow-gray-200 shadow-gray-950 dark:bg-[#111111] dark:text-gray-200 cursor-pointer 
                    rounded-md
                    focus:outline-none dark:hover:bg-[#333333be] text-xl 
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
            <div className="flex flex-1 overflow-hidden sm:flex-row flex-col-reverse font-thin sm:font-normal">
                <div className="episode-list border-x border-black dark:border-white sm:w-1/4 w-full overflow-y-auto overflow-hidden">
                    {episodes.map((episode) => (
                        <div key={episode.id} onClick={() =>{ 
                            setSelectedEpisode(episode)
                            setSelectedEpisodeId(episode.id);
                        }}
                        className={`episode-item border-b border-black dark:border-white cursor-pointer p-2 px-5 hover:bg-gray-500  ${selectedEpisodeId === episode.id ? ' text-cyan-500' : 'dark:text-gray-200'}`}>
                            Episode {episode.episode_number}: {episode.name}
                        </div>
                    ))}
                </div>
                {selectedEpisode && (
                    <div className="movie-player  sm:w-3/4 w-full z-[50]">
                        <iframe
                            className="w-full min-h-[50vh] sm:h-full z-[50]"
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
