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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
