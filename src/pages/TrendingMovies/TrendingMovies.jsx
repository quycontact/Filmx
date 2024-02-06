/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { Row } from 'antd';
import Contextpage from '../../provider/pageContext';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import Movie from '../../components/molecules/MovieCard/MovieCard';
import { numberWithCommas } from '../../helpers/helperFunctions';
import './TrendingMovies.scss';
import SpinLoading from '../../components/atoms/SpinLoading/SpinLoading';
const TrendingMovies = () => {
  const { loader, page, setPage, fetchTrending, trending, totalPage } =
    useContext(Contextpage);
  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    if (page > 0) {
      fetchTrending();
    }
  }, [page]);

  return (
    <>
      <Row>
        <div className="movie__header">
          <div className="movie__header-title">
            <h1>Trending Movies</h1>
            <h3>{numberWithCommas(totalPage || 0)} Movies</h3>
          </div>
        </div>
        <div className="w-full bg-[#10141e] md:p-10 mb-20 md:mb-0">
          <motion.div
            layout
            className="flex flex-wrap relative justify-evenly md:justify-around"
          >
            <AnimatePresence>
              {loader ? (
                <span className="loader m-10">
                  <SpinLoading className="loader m-10" />
                </span>
              ) : (
                <>
                  <InfiniteScroll
                    className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around"
                    dataLength={trending.length}
                    next={() => setPage(page + 1)}
                    hasMore={page < totalPage}
                    loader={
                      <span className="loader m-10">
                        <SpinLoading className="loader m-10" />
                      </span>
                    }
                    scrollThreshol={1}
                    style={{ overflow: 'hidden' }}
                  >
                    {trending.map((item, index) => (
                      <Movie key={index} item={item}></Movie>
                    ))}
                  </InfiniteScroll>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Row>
    </>
  );
};

export default TrendingMovies;
