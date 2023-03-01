import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesData } from "../../../redux-toolkit/slice/recipes";

const Recipes = () => {
  const recipes = useSelector((state) => state.getRecipesDataSliceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesData());
  }, []);

  return <div>
 
  </div>;
};

export default Recipes;
