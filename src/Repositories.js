import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { trim } from "./utils/utils";
import { organisations } from "./config/organisations.json";
import RepoSearch from "./components/RepoSearch";

// Icons from https://github.com/konpa/devicon
const languageIcons = {
  Java: "devicon-java-plain-wordmark",
  Python: "devicon-python-plain",
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  CoffeeScript: "devicon-coffeescript-original",
  "C++": "devicon-cplusplus-plain",
  C: "devicon-c-plain",
  Go: "devicon-go-plain",
  Scala: "devicon-scala-plain",
  "C#": "devicon-csharp-plain",
  Ruby: "devicon-ruby-plain",
  Dockerfile: "devicon-docker-plain",
  Swift: "devicon-swift-plain",
  Rust: "devicon-rust-plain",
  PHP: "devicon-php-plain",
  CSS: "devicon-css3-plain",
  HTML: "devicon-html5-plain",
};

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();
    const cancelToken = { cancelToken: source.token };

    // Fetches the repos of each organisation and sorts them by "latest update".
    // TODO: this is slow for organisations with a lot of repos (>300). Consider using
    // some sort of pagination system instead.
    const fetchOrgRepos = async () => {
      let repoList = [];
      for (let org of organisations) {
        const { data, headers } = await axios.get(
          org.github_api_url,
          cancelToken
        );
        repoList = repoList.concat(data);
        // If there are other pages, fetch them
        let headerLinks = headers.link;
        while (headerLinks && getNextLink(headerLinks)) {
          const nextLink = getNextLink(headerLinks)[0];
          const { data, headers } = await axios.get(nextLink, cancelToken);
          repoList = repoList.concat(data);
          headerLinks = headers.link;
        }
      }
      return repoList.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
    };
    // Gets the next link from the link header using a regular expression,
    // see: https://developer.github.com/v3/#link-header for more.
    const getNextLink = (linkString) => {
      return linkString.match(
        /(?![^].+"prev")(?!<)https:\/\/api\.github\.com\/.+(?=>; rel="next")/g
      );
    };

    fetchOrgRepos()
      .then((repos) => {
        setRepositories(repos);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Cancelled requests.");
        } else {
          throw error;
        }
      });

    return () => source.cancel();
  }, []);

  useEffect(() => {
    setFilteredRepos(
      repositories.filter((repo) => {
        return repo.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, repositories]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <RepoSearch setSearch={setSearch} />
      <ListGroup className="repoList">
        {filteredRepos.length ? (
          filteredRepos.map((repo) => (
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
                {repo.language in languageIcons && (
                  <i className={languageIcons[repo.language]}></i>
                )}
                <p>{trim(repo.description, 200)}</p>
              </a>
            </ListGroup.Item>
          ))
        ) : (
          <div className="noResults">
            <p>No Results Found</p>
          </div>
        )}
      </ListGroup>
    </div>
  );
};

export default Repositories;
