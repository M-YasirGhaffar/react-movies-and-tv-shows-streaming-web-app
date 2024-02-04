import React, { useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom'

const ScrollingWrapper = ({ movies, isLoading }) => {
  const navigate = useNavigate();

  const handleClick = (mov, id) => {
    if(mov.title) {
      navigate(`/movie/${id}`)
      return
    }
    navigate(`/tv/${id}`);
  } 

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();

  const animateScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 4;
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
        scrollRef.current.scrollLeft = 0;
      }
      if (!isHovering) {
        requestRef.current = requestAnimationFrame(animateScroll);
      }
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovering]);

  if (isLoading) {
    return <div className="text-center font-bold">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-4  m-1 p-1">
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto px-4 mx-8 rounded-3xl whitespace-nowrap scrollbar-hide"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        {movies.map(movie => (
          <div key={movie.id} 
            onClick={()=> {handleClick(movie, movie.id)}}
          className="inline-block p-1 m-2 rounded-md transition duration-300 ease-in-out hover:transform hover:-translate-y-1 w-[200px]" style={{ minWidth: '200px' }}>
            <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center text-wrap break-word">{movie.title || movie.original_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingWrapper;
