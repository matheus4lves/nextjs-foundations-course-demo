import React from "react";
import Header from "./Header.jsx";

const HomePage = () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

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
    </>
  );
};

export default HomePage;
