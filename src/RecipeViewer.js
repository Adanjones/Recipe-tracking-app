import React from "react";

function RecipeViewer({recipe, RecipeDelete}) { //use recipe and RecipeDelete as props
    return ( //return the content that goes in our table
          <tr className="row">
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
              <img src={recipe.photo} alt="" />
            </td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td>
              <button name="delete" onClick={RecipeDelete}>Delete</button>
            </td>
          </tr>
    )
  };

  export default RecipeViewer