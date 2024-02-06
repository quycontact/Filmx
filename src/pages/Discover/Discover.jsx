import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import './Discover.scss';
import { getDiscoverMovies } from '../../config/api';
import { numberWithCommas } from '../../helpers/helperFunctions';
import SpinLoading from '../../components/atoms/SpinLoading/SpinLoading';
import Movie from '../../components/molecules/MovieCard/MovieCard';

const Discover = () => {
  const [discoverMovies, setDiscoverMovies] = useState();

  useEffect(() => {
    const fetchDiscover = async () => {
      const discover = await getDiscoverMovies();
      setDiscoverMovies(discover);
    };
    fetchDiscover();
  }, []);

  return (
    <>
      {discoverMovies ? (
        <Row className="movie__header">
          <Col xs={24} sm={4} md={4} className="movie__header-title">
            <h1>Discover Movies</h1>
            <h3>
              {numberWithCommas(discoverMovies.total_results || 0)} Movies
            </h3>
          </Col>
          <Col xs={24} sm={20} md={20}>
            {discoverMovies.results.map((item, index) => (
              <Movie key={index} item={item}></Movie>
            ))}
          </Col>
        </Row>
      ) : (
        <SpinLoading />
      )}
    </>
  );
};
export default Discover;
