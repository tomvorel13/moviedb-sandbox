import React from "react";

const Star = ({ size }) => {
  return (
    <i
      style={{
        "font-size": size
      }}
      class="far fa-star"
    />
  );
};

export default Star;
