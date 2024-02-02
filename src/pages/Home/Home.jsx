/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Slider from '../../components/molecules/Slider/Slider';
import { getGenres, getPopularMovies } from '../../config/api';

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
    </div>
  );
};
export default Home;
