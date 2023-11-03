/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { useState, useEffect } from "react";

const Githubrepos = (props) => {
  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/${props.owner}`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, [props.owner]);
  const handleSort = (value) => {
    let updatedRepos = [...repos]; // Create a copy of the original repos array

    if (value === "forks") {
      updatedRepos.sort((a, b) => b.forks - a.forks);
    } else if (value === "stars") {
      updatedRepos.sort((a, b) => b.stars - a.stars);
    }

    setSortBy(value); // Update the sortBy state for UI indication
    setRepos(updatedRepos);
  };

  return (
    <>
      <h1>SortBy:</h1>

      <button onClick={() => handleSort("forks")} className="btn" value="forks">
        Forks
      </button>
      <button onClick={() => handleSort("stars")} className="btn" value="stars">
        Stars
      </button>

      <h1>{props.owner}</h1>
      {repos.map((repo) => {
        return (
          <>
            <h1 className="repos">{repo.name}</h1>
            <h1 className="repos">Forks :{repo.forks}</h1>
            <h1 className="repos">Stars: {repo.stars}</h1>
          </>
        );
      })}
    </>
  );
};

export default Githubrepos;
