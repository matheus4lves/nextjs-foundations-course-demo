import React, { useState } from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";

const HomePage = () => {
  const [likes, setLikes] = useState(0);

  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  function handleIncreaseLikes() {
    setLikes(likes => likes + 1);
  }

  return (
    <>
      <Header title="Develop. Preview. Ship. 🚀" />
      {/* Note that the new array is populated with JSX items. The array is
      not JSX itself, but it contains items that are JSX. */}
      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <Button onClick={handleIncreaseLikes}>Like {likes}</Button>
    </>
  );
};

export default HomePage;
