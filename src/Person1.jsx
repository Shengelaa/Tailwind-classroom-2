import React from "react";

const Person1 = ({ money, handleIcrease }) => {
  return (
    <div>
      <h2>Person 1</h2>
      <p>Money : ${money}</p>
      <button onCanPlay={handleIcrease}>Double Money</button>{" "}
    </div>
  );
};

export default Person1;
