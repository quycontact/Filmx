/* eslint-disable react/prop-types */
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import './MovieCard.scss';
const Movie = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.genre}/${props.item.id}`);
  };
  return (
    <Row className="card-container">
      <Col>
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w500${props.item?.poster_path}`}
          alt=""
          onClick={handleClick}
        />
      </Col>
      <Row onClick={handleClick} className="card-content">
        <div className="card-content_overlay">
          <AiFillStar />
          <p className="card-content_description">{props.item?.vote_average}</p>
        </div>
      </Row>
    </Row>
  );
};

export default Movie;
