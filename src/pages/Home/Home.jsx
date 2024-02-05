/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Slider from '../../components/molecules/Slider/Slider';
import { getGenres, getPopularMovies } from '../../config/api';
import MovieContainer from '../../components/molecules/MovieContainer/MovieContainer';
import requests from '../../config/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(async () => {
    const data = await getPopularMovies();
    const genres = await getGenres();
    setGenres(genres.genres);
    setMovies(data.results);
  }, []);

  return (
    <div className="home-container">
      <Slider movie={movies} genres={genres} />
      <MovieContainer
        title="UpComing"
        fetchURL={requests.requestUpcoming}
        rowID="1"
        genre="upcoming"
      />
      <MovieContainer
        title="Popular"
        fetchURL={requests.requestPopular}
        rowID="2"
        genre="popular"
      />
      <MovieContainer
        title="Top Rated"
        fetchURL={requests.requestTopRated}
        rowID="3"
        genre="top_rated"
      />
      <MovieContainer
        title="Trending"
        fetchURL={requests.requestTrending}
        rowID="4"
        genre="popular"
      />
      <MovieContainer
        title="Horror"
        fetchURL={requests.requestHorror}
        rowID="5"
      />
    </div>
  );
};
export default Home;
