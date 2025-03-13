import React from "react";


const Card = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="px-10 py-5 border rounded-md text-center flex-grow"
    >
      <h1 className="text-lg font-bold">{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Card;
