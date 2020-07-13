import React from "react";
import { Card } from "react-bootstrap";
import { trim } from "../utils/utils";

const FeaturedRepo = ({ name, repo_url, homepage, description, icon }) => {
  const trimLength = icon ? 75 : 150; // Length to trim description.

  const cardStyle = {
    minWidth: "18rem",
    minHeight: "21rem",
    marginBottom: "3rem",
  };

  const cardImageStyle = {
    maxWidth: "9rem",
    display: "block",
    margin: "auto",
    marginTop: "1rem",
  };

  return (
    <>
      <a href={homepage ? homepage : repo_url} className="repoCard">
        <Card style={cardStyle}>
          <Card.Img variant="top" src={icon} style={cardImageStyle} />
          <Card.Body style={icon ? {} : { marginTop: "8rem" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{trim(description, trimLength)}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </>
  );
};

export default FeaturedRepo;
