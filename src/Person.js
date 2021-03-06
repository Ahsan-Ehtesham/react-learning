import React from "react";

const Person = (props) => {
  const { name, genderType } = props;
  return (
    <div>
      <p>Hello {name}</p>
      <h1>{genderType}</h1>
    </div>
  );
};

export default Person;
