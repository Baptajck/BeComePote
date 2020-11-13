import React from "react";
import css from './spinner.scss';
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="spinner">
      <BeatLoader
        css={css}
        size={20}
        color={"#f7862f"}
        loading={loading}
      />
    </div>
  );
}

export default Spinner;
