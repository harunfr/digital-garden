import React, { useEffect, useState } from "react";
import User from "./User";

const GithubProfile = () => {
  const [query, setQuery] = useState("harunfr");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Fetching data now...");

      const response = await fetch(`https://api.github.com/users/${query}`);
      let data = await response.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${query}/repos`
      );
      const reposData = await reposResponse.json();

      data.repos = reposData.slice(0, 5);
      setUserData(data);

      console.log(data);
    };
    fetchUserData();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    setQuery(input);
    // console.log({input, e});
  };

  return (
    <div>
      <form className="github-form" onSubmit={handleSubmit}>
        <input className="github-form-input" type="text" />
      </form>
      <User user={userData} />
    </div>
  );
};

export default GithubProfile;

// public repos --> 'https://api.github.com/users/wesbos/repos?sort=created'

// user info 'https://api.github.com/users/wesbos'
