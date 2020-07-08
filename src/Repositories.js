import React, { useEffect, useState } from "react";
import axios from "axios";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(
        "https://api.github.com/orgs/nokia/repos?sort=updated&type=sources&per_page=100",
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }
      )
      .then((response) => {
        setLoading(false);
        console.log(response.headers.link);
        setRepositories(response.data);
      });
    return () => cancel();
  }, []);
  console.log(repositories.length);
  if (loading) return "Loading...";

  return (
    <>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url}>
              {repo.name} (*{repo.stargazers_count})
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Repositories;
