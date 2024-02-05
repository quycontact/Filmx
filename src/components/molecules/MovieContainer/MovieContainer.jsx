/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FiChevronsRight } from 'react-icons/fi';
import './MovieContainer.scss';
import Movie from '../MovieCard/MovieCard';

const MovieContainer = ({ title, fetchURL, rowID, genre }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const handleClick = () => {
    navigate(`${genre}`);
  };

  return (
    <>
      <Row className="movie-container-first">
        <h2 className="movie-container-inner ">{title}</h2>
        {genre ? (
          <FiChevronsRight onClick={handleClick} className="movie-icon" />
        ) : null}
      </Row>
      <Row className="movie-container-second group">
        <MdChevronLeft
          className="icon-controller-left group-hover:block"
          size={30}
          onClick={slideLeft}
        />
        <Col id={'slider' + rowID} className="movie-content">
          {movies.map((item, index) => {
            return <Movie key={index} item={item} genre={genre}></Movie>;
          })}
        </Col>
        <MdChevronRight
          className="icon-controller-right group-hover:block"
          size={30}
          onClick={slideRight}
        />
      </Row>
    </>
  );
};

export default MovieContainer;
