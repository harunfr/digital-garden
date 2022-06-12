import React, { useEffect, useState, useRef } from "react";

const User = ({ user }) => {
  return (
    <div className="live-user">
      <img className="live-image" src={user.picture.thumbnail} />
      <div className="live-name">{`${user.name.first} ${user.name.last}`}</div>
      <div className="live-location">{`${user.location.city}, ${user.location.state}`}</div>
    </div>
  );
};

const LiveUserFilter = () => {
  const [users, setUsers] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const fetchedUsers = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("fetching data ...");
      const response = await fetch("https://randomuser.me/api?results=50");
      const data = await response.json();
      const allUsers = data.results;
      fetchedUsers.current = allUsers;
      setUsers(allUsers);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log({ filterWord, users });
    if (!filterWord) {
      setUsers(fetchedUsers.current);
    } else {
      setUsers(
        fetchedUsers.current.filter((user) => {
          const regex = new RegExp(filterWord, "i");
          const willBeSearched = [
            user.name.first,
            user.name.last,
            user.location.city,
            user.location.state,
          ];
          return willBeSearched.some((word) => {
            return regex.test(word);
          });
        })
      );
    }
  }, [filterWord]);

  return (
    <div className="live-user-filter">
      <div className="live-header">
        <div className="live-title-info">
          <h2 className="live-title">Live User Filter</h2>
          <p className="live-info">Search by name and/or location</p>
        </div>
        <input
          className="live-input"
          type="text"
          onChange={(e) => setFilterWord(e.target.value)}
          autoFocus
        />
      </div>

      <div className="live-users">
        {users?.map((user) => (
          <User user={user} key={user.cell} />
        ))}
      </div>
    </div>
  );
};

export default LiveUserFilter;
