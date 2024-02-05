 
/* eslint-disable no-unused-vars */
import './Navigation.scss';
import { Typography, Row, Col, Input, Space } from 'antd';
import { useEffect, useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Navigation = () => {
  const [isOpenNavigation, setOpenNavigation] = useState(false);
  const onNavigationToggle = () => {
    document.body.classList.toggle('is-navigation-open');
    document.body.classList.remove('is-search-open');
    setOpenNavigation(!isOpenNavigation);
  };

  const onClickLink = (e) => {
    if (e.target.nodeName === 'A') {
      document.body.classList.remove('is-navigation-open');
      setOpenNavigation(false);
      window.scrollTo(0, 0);
    }
  };
  const scrollHandler = () => {
    if (window.pageYOffset > 100) {
      document.body.classList.add('is-scrolled');
    } else {
      document.body.classList.remove('is-scrolled');
    }
  };

  useEffect(() => {
    if (window.screen.width > 768) {
      window.addEventListener('scroll', scrollHandler);
    }
    return () => window.removeEventListener('scroll', scrollHandler);
  });
  return (
    <div className="navigation">
      <div className="navigation__toggle" onClick={onNavigationToggle}>
        {isOpenNavigation ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Row className="navigation__wrapper">
        <Col className="navigation__logo">
          <Typography className="navigation__logo">FilmX</Typography>
        </Col>
        <Col className="navigation__menu-wrapper">
          <div className="navigation__menu">
            <Typography
              activeClassName="navigation__active"
              className="navigation__link"
            >
              Home
            </Typography>
            <Typography
              activeClassName="navigation__active"
              className="navigation__link"
            >
              Trending
            </Typography>
            <Typography
              activeClassName="navigation__active"
              className="navigation__link"
            >
              TV Shows
            </Typography>
            <Typography
              activeClassName="navigation__active"
              className="navigation__link"
            >
              People
            </Typography>
            <Typography
              activeClassName="navigation__active"
              className="navigation__link"
              exact
              to={'/'}
            >
              Genres
            </Typography>
            <Typography
              activeClassName="navigation__active"
              className="navigation__link"
            >
              Favorites
            </Typography>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Navigation;
