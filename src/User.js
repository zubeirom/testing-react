import React, { useState, useEffect } from "react";

function User(props) {
  const [data, setData] = useState({ user: [] });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(json => {
        setData({ user: json });
      });
  }, []);

  return (
    <ul>
      {data.user.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
}

export default User;
