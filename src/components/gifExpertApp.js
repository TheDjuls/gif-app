import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>App de Gifs</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((item, index) => {
          return <GifGrid key={index} category={item} />;
        })}
      </ol>
    </>
  );
};
