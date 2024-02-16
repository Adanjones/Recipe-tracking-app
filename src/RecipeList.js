import React from "react";
import RecipeViewer from "./RecipeViewer";

function RecipeList({recipes, RecipeDelete}) { //uses recipes and RecipeDelete as props
  const rows = recipes.map((recipe, index) => ( //create the table rows using map and the RecipeViewer information
    <RecipeViewer
      key={index}
      recipe={recipe}
      RecipeDelete={() => RecipeDelete(index)}/>
  )); 

  return ( //return the table headers and use rows in tbody to finish table
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;