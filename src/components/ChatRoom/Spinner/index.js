import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import css from './spinner.scss';

const Spinner = ({ loading }) => (
  <div className="spinner">
    <PulseLoader
      css={css}
      size={20}
      color="#f7862f"
      loading={loading}
    />
  </div>
);

export default Spinner;
