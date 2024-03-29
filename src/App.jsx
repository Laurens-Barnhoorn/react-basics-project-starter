import React, { useState } from "react";
import { AllRecipesPage } from "./pages/AllRecipesPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage selectedRecipe={selectedRecipe} onGoBack={handleGoBack} />
      ) : (
        <AllRecipesPage onRecipeSelect={handleRecipeSelect} />
      )}
    </div>
  );
};
