import React from "react";
import { featured } from "./config/featured.json";
import FeaturedRepo from "./components/FeaturedRepo";
import { Container, Row, Col } from "react-bootstrap";
import { trim } from "./utils/utils";

const Home = () => {
  return (
    <div>
      <div className="aboutStatement">
        <div className="container">
          <h2>Our Open Source Commitment</h2>
          <p>
          At Nokia we believe in open source software. In the appropriate
          areas, sharing, cooperating, and working together not only
          makes the software better, but brings the best out of innovating
          together. Nokia has a long history in open source and we bring a
          history reaching over 20 years into the community.
          </p>
          <h2>Featured Open Source Projects</h2>
        </div>
      </div>

      <div className="container">
        <div className="featuredRepos">
          <Container fluid="true">
            <Row>
              {featured.map((repo) => (
                <Col key={repo.name} xl={4} lg={4} md={6} sm={10} xs={12}>
                  <FeaturedRepo
                    name={repo.name}
                    repo_url={repo.repo_url}
                    homepage={repo.homepage}
                    description={trim(repo.description, 150)}
                    icon={repo.logo}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
