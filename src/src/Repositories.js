import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { trim } from "./utils/utils";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const githubUrl =
    "https://api.github.com/orgs/nokia/repos?sort=updated&type=sources&per_page=100";

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(githubUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setLoading(false);
        setRepositories(response.data);

        // If there is a second page, fetch it and concat it to the current
        if (response.headers.link) {
          axios
            .get(githubUrl.concat("&page=2"))
            .then((res) => setRepositories(response.data.concat(res.data)));
        }
      });
    return () => cancel();
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
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
