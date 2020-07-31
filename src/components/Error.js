import React from "react";

const Error = ({ message }) => {
  return (
    <div className="container">
      <i className="fa fa-exclamation-circle"></i>
      <h2>Something went wrong!</h2>
      <p>
        The page didn't load correctly. See the JavaScript console for technical
        details.
      </p>
    </div>
  );
};

export default Error;
