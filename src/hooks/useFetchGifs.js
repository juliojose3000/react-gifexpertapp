import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    //Los Effect cannot be async
    getGifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // { data: [], loading: true };
};
