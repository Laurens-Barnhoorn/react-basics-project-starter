import React from "react";
import { Center, Heading, Box, Text, Button } from "@chakra-ui/react";
import restaurant from "../images/restaurant.jpg";
export const RecipePage = ({ selectedRecipe, onGoBack }) => {
  return (
    <Center
      p="4"
      h="100vh"
      flexDir="column"
      mt="0"
      bgImage={`url(${restaurant})`}
      bgSize="cover"
      overflowY="auto"
    >
      <Box
        p="6"
        maxW="md"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="lg"
        textAlign="center"
        mt="40"
        bg="#f0f8f4"
        _hover={{ bg: "#d8f3dc" }}
      >
        <Heading as="h2" size="lg" mb="4">
          {selectedRecipe.label}
        </Heading>
        <Text fontSize="lg" mb="4">
          Meal Type: {selectedRecipe.mealType.join(", ")}
        </Text>
        <Text fontSize="lg" mb="4">
          Dish Type: {selectedRecipe.dishType.join(", ")}
        </Text>
        <Text fontSize="lg" mb="4">
          Total Cooking Time: {selectedRecipe.totalTime}
        </Text>
        <Text fontSize="lg" mb="4">
          Diet Label: {selectedRecipe.dietLabels.join(", ")}
        </Text>
        <Text fontSize="lg" mb="4">
          Cautions: {selectedRecipe.cautions.join(", ")}
        </Text>
        <Text fontSize="lg" mb="4">
          Ingredients:
        </Text>
        <ul>
          {selectedRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <Text fontSize="lg" mb="4">
          Servings: {selectedRecipe.yield}
        </Text>
        <Text fontSize="lg" mb="4">
          Total Nutrients:
        </Text>
        <ul>
          <li>
            Energy: {selectedRecipe.totalNutrients.ENERC_KCAL.quantity}{" "}
            {selectedRecipe.totalNutrients.ENERC_KCAL.unit}
          </li>
          <li>
            Protein: {selectedRecipe.totalNutrients.PROCNT.quantity}{" "}
            {selectedRecipe.totalNutrients.PROCNT.unit}
          </li>
          <li>
            Fat: {selectedRecipe.totalNutrients.FAT.quantity}{" "}
            {selectedRecipe.totalNutrients.FAT.unit}
          </li>
          <li>
            Carbs: {selectedRecipe.totalNutrients.CHOCDF.quantity}{" "}
            {selectedRecipe.totalNutrients.CHOCDF.unit}
          </li>
          <li>
            Cholesterol: {selectedRecipe.totalNutrients.CHOLE.quantity}{" "}
            {selectedRecipe.totalNutrients.CHOLE.unit}
          </li>
          <li>
            Sodium: {selectedRecipe.totalNutrients.NA.quantity}{" "}
            {selectedRecipe.totalNutrients.NA.unit}
          </li>
        </ul>
        <Button
          mt="4"
          mb=""
          size="lg"
          bg="#f0f8f4"
          _hover={{ bg: "#8AB98A" }}
          onClick={onGoBack}
        >
          Go Back
        </Button>
      </Box>
    </Center>
  );
};
