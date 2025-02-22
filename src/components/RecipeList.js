import React from "react";

const RecipeList = () => {
  const recipes = [
    { id: 1, title: "Chicken Biryani", description: "Spicy and flavorful biryani." },
    { id: 2, title: "Pasta Alfredo", description: "Creamy and delicious pasta dish." },
  ];

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
