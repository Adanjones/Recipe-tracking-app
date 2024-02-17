import React, { useState } from "react";


function RecipeCreate({recipes, setRecipes}) { //have recipes and setRecipes as props
 
 
  const initialFormState = { //makes sure the initial state of the form is empty
    name: "", 
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [form,setForm] = useState({...initialFormState}); //makes sure the useState is the initial form state
  
  const handleChange = ({target}) => { // handle how the form changes
    setForm({...form,
      [target.name]: target.value})
  };

  const handleSubmit = (event) => { //event handler for when you submit
    event.preventDefault()   //prevents the default behavior from resetting the page
    console.log(form)
    setRecipes([...recipes, form])
    setForm({...initialFormState})
  };
  
  return ( //return my form with my input fields in my table
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <label htmlFor="name"></label> 
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={form.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={form.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={form.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={form.ingredients}
                autoFocus= "on"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={form.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
