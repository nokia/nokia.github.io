import React from "react";
import { Card } from "react-bootstrap";
import { trim } from "../utils/utils";


const cardStyle = {
  minWidth: "18rem",
  minHeight: "18rem",
  marginBottom: "3rem",
};

const cardImageDivStyle = {
  width: "15rem",
  height: "9rem",
  display: "block",
  margin: "0 auto",
  marginBlock: "1rem",
};

const cardImageStyle = {
  maxWidth: "55%",
  display: "block",
  margin: "0 auto",
};

const FeaturedRepo = ({ name, repo_url, homepage, description, icon }) => {
  return (
    <>
      <div className="repoCard">
        <Card style={cardStyle}>
          <div className="cardImage" style={cardImageDivStyle}>
            <Card.Img variant="top" src={icon} style={cardImageStyle} />
          </div>
          <Card.Body>
            <div className="cardText">
              <a href={homepage ? homepage : repo_url}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{trim(description, 113)}</Card.Text>
              </a>
            </div>
            <div className="cardLinks">
              <Card.Link href={repo_url}>
                <i className="fa fa-github"></i>
              </Card.Link>
              {homepage && (
                <Card.Link href={homepage}>
                  <i className="fa fa-home"></i>
                </Card.Link>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FeaturedRepo;
