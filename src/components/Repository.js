import React from "react";

const Repository = ({ name, url, description, icon }) => {
  const iconStyle = {
    maxWidth: 100,
    marginBottom: "1rem",
    display: "block",
  };
  return (
    <div>
      <a href={url}>
        <img src={icon} alt="" style={iconStyle} />
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default Repository;
