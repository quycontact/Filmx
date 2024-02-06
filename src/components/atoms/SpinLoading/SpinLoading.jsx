/* eslint-disable react/prop-types */
import { Spin } from 'antd';

import './SpinLoading.scss';

const SpinLoading = ({ className }) => {
  // const accessToken = localStorage.getItem('token');

  // if (!accessToken) {
  //   window.location.href = `${location.origin}/login`;
  // }
  return (
    <div className={`spin ${className}`}>
      <Spin size="large" />
    </div>
  );
};
export default SpinLoading;
