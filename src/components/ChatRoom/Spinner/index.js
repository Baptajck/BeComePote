import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import css from './spinner.scss';

const Spinner = ({ loading }) => (
  <div className="spinner">
    <BeatLoader
      css={css}
      size={20}
      color="#f7862f"
      loading={loading}
    />
  </div>
);

export default Spinner;
