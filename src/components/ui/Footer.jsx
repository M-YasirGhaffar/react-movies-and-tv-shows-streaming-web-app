import React from 'react';

const Footer = () => {
    return (
        <footer className="footer tex-center h-[10vh] text-wrap 
        flex justify-center items-center
        text-break bg-[#111111] text-gray-200">
            <p className="text-center text-sm hover:text-cyan-500 transition-all delay-200"> <a href="https://github.com/M-YasirGhaffar/React-movie-streaming-app" target='_blank'>  Developed by Yasir <i className="fa-solid fa-copyright"></i> 2024 - <i className="fa-brands fa-github"></i> &nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i> </a></p>
        </footer>
    );
};

export default Footer;