import React from "react";

function Card(details) {
  return (
    <div>
      <img src={details.imgURL} />
      <h2>{details.name}</h2>
      <p>
        {details.tel}
        <br />
        {details.email}
      </p>
    </div>
  );
}

export default Card;
