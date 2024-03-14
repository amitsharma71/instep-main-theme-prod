import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
  return (
    <>
      <div className="spinner_background">
        <BeatLoader color="#46d636" size={30} timeout={5000} />
      </div>
    </>
  );
};

export default Spinner;
