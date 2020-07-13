import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { trim } from "./utils/utils";
import { organisations } from "./config/organisations.json";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchOrgRepos().then((repos) => {
      setRepositories(repos);
      setLoading(false);
    });
  }, []);

  // Fetch the repos of each organisation and sort them by "latest update"
  const fetchOrgRepos = async () => {
    let repoList = [];
    for (let org of organisations) {
      const { data, headers } = await axios.get(org.github_api_url);
      repoList = repoList.concat(data);
      // If there is a second page, fetch it
      if (headers.link) {
        const { data } = await axios.get(org.github_api_url.concat("&page=2"));
        repoList = repoList.concat(data);
      }
    }
    return repoList.sort((a, b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
  };

  if (loading) {
    return (
      <div className="container" style={{ width: "50%", margin: "20rem auto" }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <ListGroup className="repoList">
        {repositories.map((repo) => (
          <ListGroup.Item key={repo.name}>
            <a href={repo.html_url}>
              {repo.name}
              <span style={{ marginLeft: "0.5rem" }}>
                <i className="fa fa-code-fork"></i>
                {repo.forks}
              </span>
              <span style={{ marginLeft: "0.5rem" }}>
                <i className="fa fa-star"></i>
                {repo.stargazers_count}
              </span>
              <p>{trim(repo.description, 200)}</p>
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Repositories;
