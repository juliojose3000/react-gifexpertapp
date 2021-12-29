import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  /*const handleAdd = () => {
    setCategories( [...categories, "Naruto"] );
  };*/

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => {
        return <GifGrid key={category} category={category}></GifGrid>;
      })}
    </>
  );
};

export default GifExpertApp;
