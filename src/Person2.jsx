import React from "react";

const Person2 = ({ money, handleIcrease }) => {
  return (
    <div>
      <h2>Person 2</h2>
      <p>Money : ${money}</p>
      <button onCanPlay={handleIcrease}>Double Money</button>{" "}
    </div>
  );
};

export default Person2;
