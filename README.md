# React Movie & TV Show Streaming App

## Overview

This project is a React-based web application that utilizes The Movie Database (TMDB) API to showcase a wide range of movies and TV shows. It's designed with responsiveness in mind, using Tailwind CSS for styling and Redux Toolkit for efficient state management. Users can explore different categories, including trending, top-rated, and detailed seasonal information for TV shows.

## Features

- **Dynamic Dashboard**: A central hub showcasing movies and TV shows with options to filter by category.
- **Detailed View**: Clicking on a movie or TV show card opens a detailed page with extensive information, such as cast, genre, ratings, and episode details for TV shows.
- **Responsive Design**: Built with Tailwind CSS, the application is fully responsive and optimized for various screen sizes.
- **State Management**: Utilizes Redux Toolkit for managing application state, enhancing the performance and scalability.
- **Navigation**: Implements React Router for seamless and intuitive navigation throughout the application.
- **Automatic Scrolling**: Featured sections auto-scroll, improving user interaction and engagement.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/M-YasirGhaffar/React-movies-and-tv-shows-streaming-web-app
   ```
2. Navigate to the project directory:
   ```
   cd React-movies-and-tv-shows-streaming-web-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on the `.env.example` template and add your TMDB API key:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Axios](https://github.com/axios/axios) - HTTP client
- [React Router](https://reactrouter.com/) - For routing
- [Vite](https://vitejs.dev/) - Build tool

## Project Structure

- `.env.example` - Template for environment variables.
- `.eslintrc.cjs` - ESLint configuration.
- `package.json` - Project metadata and dependencies.
- `postcss.config.js` - PostCSS configuration.
- `src/components` - React components.
- `src/features` - Redux slices.
- `src/App.jsx` - Main application component.
- `src/index.css` - Global styles.
- `vite.config.js` - Configuration for Vite.
- `vercel.json` - Configuration for Vercel deployment.

## Challenges & Solutions

- **API Integration**: Managed asynchronous data fetching with Redux Toolkit's async thunks.
- **Responsive Design**: Utilized Tailwind CSS for responsive layouts and styling.
- **State Management Complexity**: Simplified with Redux Toolkit, organizing state into slices.

## Future Enhancements

- Implement user authentication for personalized experiences.
- Add a search feature to find specific movies or TV shows.
- Optimize performance further, including lazy loading components.

## Deployment

Deployed on Vercel with automatic rewrites configuration for SPA routing support. See `vercel.json` for deployment settings.

## Contributing

Contributions are welcome!
