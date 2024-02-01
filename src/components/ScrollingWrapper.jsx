import React, { useEffect, useRef, useState } from 'react';

const ScrollingWrapper = ({ movies, isLoading }) => {
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
      {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out mx-5">
        {componentTitle}
      </h1> */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto px-4 mx-8 rounded-3xl whitespace-nowrap scrollbar-hide"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        {movies.map(movie => (
          <div key={movie.id} className="inline-block p-1 m-2 rounded-md transition duration-300 ease-in-out hover:transform hover:-translate-y-1" style={{ minWidth: '200px' }}>
            <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingWrapper;
