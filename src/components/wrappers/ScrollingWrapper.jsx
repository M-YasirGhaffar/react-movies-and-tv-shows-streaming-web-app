import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ScrollingWrapper = ({ movies, isLoading }) => {
  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const scrollContent = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const animateScroll = () => {
    if (!isHovering && scrollRef.current) {
      scrollRef.current.scrollLeft += 2;
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
        scrollRef.current.scrollLeft = 0;
      }
      requestRef.current = requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovering]);

  if (isLoading) {
    return <div className="text-center font-bold"><i className="fa-solid fa-spinner"></i></div>;
  }

  return (
    <div className="container mx-auto my-4 m-1 p-1 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button 
        onClick={() => scrollContent('left')} 
        onMouseEnter={handleMouseEnter} 
        className="absolute left-0 z-10
         bg-[#3333331a] h-[40%] w-9 rounded dark:bg-[#3333339f] hover:bg-[#33333327]"
        style={{ top: '50%', transform: 'translateY(-75%)' }}
      >
        <i className=" text-center rounded-full text-gray-400 text-3xl fa-solid fa-circle-chevron-left"></i>
      </button>
      
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto px-4 mx-8 whitespace-nowrap scrollbar-hide"
      >
        {movies.map(movie => (
          <Link key={movie.id} 
            to={movie.title ? `/movie/${movie.id}` : `/tv/${movie.id}`}
            className="inline-block p-1 m-2 rounded-md transition duration-300 
            ease-in-out hover:transform hover:-translate-y-1 
            w-[150px] min-w-[150px]"
          >
            <img src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : '/placeholder.jpeg'} alt={movie.title || movie.original_name} className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center text-wrap break-word">{movie.title || movie.original_name}</p>
          </Link>
        ))}
      </div>

      <button 
        onClick={() => scrollContent('right')} 
        onMouseEnter={handleMouseEnter} 
        className="absolute right-0 z-10 
         bg-[#3333331a] dark:bg-[#3333339f] h-[40%] w-9 rounded hover:bg-[#333333d0]"
        style={{ top: '50%', transform: 'translateY(-75%)' }}
      >
        <i className=" text-center rounded-full text-gray-400 text-3xl fa-solid fa-circle-chevron-right"></i>
      </button>
    </div>
  );
};

export default ScrollingWrapper;
