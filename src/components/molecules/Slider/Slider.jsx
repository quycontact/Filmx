/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Carousel, Typography } from 'antd';
import './Slider.scss';
import Skeleton from 'react-loading-skeleton';
import { HiStar } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';
import { Row, Col } from 'antd';

const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face/';
const tmdbBackdropPath = 'https://image.tmdb.org/t/p/original';

const Slider = ({ movie, genres }) => {
  return (
    <>
      {movie && movie.length > 0 ? (
        <Carousel autoplay>
          {movie.slice(0, 5).map((item, index) => {
            return (
              <div
                key={index}
                className="container__wrapper movie__slider-wrapper"
              >
                <Row className="movie__slider-backdrop">
                  <img
                    src={`${tmdbBackdropPath}${item.backdrop_path}`}
                    alt={`${item.backdrop_path}`}
                  />
                </Row>
                <Row className="movie__slider-content">
                  <Col
                    xs={24}
                    sm={24}
                    md={19}
                    className="movie__slider-description"
                  >
                    <h1>
                      {item?.original_title || <Skeleton width={'50%'} />}
                    </h1>
                    <p className="movie__slider-rating">
                      {item?.vote_average ? (
                        <>
                          <HiStar className="movie__slider-rating-star" />
                          &nbsp;{item.vote_average} Rating
                        </>
                      ) : (
                        <Skeleton width={'30%'} />
                      )}
                    </p>
                    <p className="movie__slider-genre">
                      {item?.genre_ids ? (
                        item.genre_ids?.map((a, index) => (
                          <Typography
                            key={index}
                            className="movie__slider-genre-pill"
                            // to={`/genre/${
                            //   genres.find((b) => b.id === a)?.name
                            // }/${a}`}
                          >
                            {genres.find((b) => b.id === a)?.name}
                          </Typography>
                        ))
                      ) : (
                        <Skeleton width={'25%'} />
                      )}
                    </p>
                    <p className="view__overview mt-0">
                      {item?.overview || <Skeleton count={4} />}
                    </p>
                    <br />
                    <Row className="movie__slider-button">
                      {item?.id ? (
                        <button
                          className="button--primary"
                          // onClick={() =>
                          //   history.push(`/view/movie/${movie.id}`)
                          // }
                        >
                          View Movie
                        </button>
                      ) : (
                        <Skeleton width={150} height={50} />
                      )}
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={5} className="view__poster">
                    {item ? (
                      <LazyLoad debounce={false} offsetVertical={500}>
                        <img
                          className="view__poster-img"
                          data-key={item.imgId}
                          src={
                            item.poster_path
                              ? `${tmdbPosterPath + item.poster_path}`
                              : '/img-placeholder.jpg'
                          }
                        />
                      </LazyLoad>
                    ) : (
                      <Skeleton width={'100%'} height={'100%'} />
                    )}
                  </Col>
                </Row>
              </div>
            );
          })}
        </Carousel>
      ) : (
        ''
      )}
    </>
  );
};

export default Slider;
