import React from "react";

export const GifGridItem = ({ id, url, title }) => {
  return (
    <div className="card animate__animated animate__bounceInLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
