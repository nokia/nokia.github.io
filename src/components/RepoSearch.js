import React from "react";
import { FormControl } from "react-bootstrap";

const RepoSearch = ({ setSearch }) => {
  return (
    <div className="repoSearch">
      <FormControl
        type="text"
        placeholder="Search Repositories"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></FormControl>
    </div>
  );
};

export default RepoSearch;
