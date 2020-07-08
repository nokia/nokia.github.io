import React from "react";
import { featured } from "./config/featured.json";
import Repository from "./components/Repository";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2>Our Open Source Commitment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <h2>Featured Open Source Projects</h2>
      {featured.map((repo) => (
        <Repository
          key={repo.name}
          name={repo.name}
          icon={repo.logo}
          description={repo.description}
          url={repo.url}
        />
      ))}
    </div>
  );
};

export default Home;
