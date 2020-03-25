/*
 * Import : npm
 */
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

/*
 * Import : local
 */
import spinner from './spinner.scss';

/*
 * Component
 */
const Spinner = ({ loading }) => (
  <div className="spinner">
    <h2 className="spinner-title">Veuillez patienter...</h2>
    <ClipLoader
      css={spinner}
      sizeUnit="px"
      size={100}
      color="#A836D7"
      loading={loading}
    />
  </div>
);

Spinner.propTypes = {
  loading: PropTypes.bool,
};

Spinner.defaultProps = {
  loading: true,
};

/*
 * Export
 */
export default Spinner;
