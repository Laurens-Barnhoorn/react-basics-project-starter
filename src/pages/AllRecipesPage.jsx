import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Badge,
  Flex,
  Input,
  HStack,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import restaurant from "../images/restaurant.jpg";

const RecipeItem = ({ recipe, onRecipeSelect }) => (
  <Box
    key={recipe.label}
    border="1px solid #ccc"
    p="2"
    m="2"
    w="300px"
    textAlign="center"
    onClick={() => onRecipeSelect(recipe)}
    cursor="pointer"
    borderRadius="md"
    bg="#f0f8f4"
    _hover={{ bg: "#d8f3dc" }}
  >
    <Heading as="h2" size="md" mb="2" overflowWrap="break-word">
      {recipe.label}
    </Heading>
    <Image
      src={recipe.image}
      alt={recipe.label}
      maxH="200px"
      mx="auto"
      display="block"
    />
    <Text mb="1">Diet Label: {recipe.dietLabels.join(", ")}</Text>
    <Text mb="1">Cautions: {recipe.cautions.join(", ")}</Text>
    <Text mb="1">Meal Type: {recipe.mealType.join(", ")}</Text>
    <Text mb="1">Dish Type: {recipe.dishType.join(", ")}</Text>
    <Flex justifyContent="center" flexWrap="wrap">
      {recipe.healthLabels.map((label) => (
        <Badge key={label} colorScheme="green" m="1">
          {label}
        </Badge>
      ))}
    </Flex>
  </Box>
);

export const AllRecipesPage = ({ onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setScrollIndex(Math.max(scrollIndex - 1, 0));
    } else {
      setScrollIndex(
        Math.min(scrollIndex + 1, Math.ceil(filteredRecipes.length / 3) - 1)
      );
    }
  };

  // Filter
  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;
    const hasName = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const hasHealthLabels = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return hasName || hasHealthLabels;
  });

  return (
    <Center
      h="100vh"
      flexDir="column"
      mt="0"
      bgImage={`url(${restaurant})`}
      bgSize="cover"
    >
      <Heading
        fontFamily="cursive"
        fontSize="3xl"
        color="#333"
        textShadow="2px 2px #ccc"
      >
        Recipe for the Master
      </Heading>
      <Input
        placeholder="Search by name or health labels"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb="4"
        w="300px"
        bg="white"
        color="black"
        borderRadius="md"
        border="1px solid #ccc"
        px="2"
      />
      <HStack spacing="4" alignItems="center">
        {scrollIndex > 0 && (
          <Box
            p="2"
            borderRadius="full"
            bg="#f0f8f4"
            _hover={{ bg: "#d8f3dc" }}
          >
            <button onClick={() => handleScroll("left")}>&lt;</button>
          </Box>
        )}
        <Flex flexWrap="nowrap" overflowX="auto" w="100%">
          {filteredRecipes
            .slice(scrollIndex * 3, (scrollIndex + 1) * 3)
            .map((hit) => (
              <RecipeItem
                key={hit.recipe.label}
                recipe={hit.recipe}
                onRecipeSelect={onRecipeSelect}
              />
            ))}
        </Flex>
        {scrollIndex < Math.ceil(filteredRecipes.length / 3) - 1 && (
          <Box
            p="2"
            borderRadius="full"
            bg="#f0f8f4"
            _hover={{ bg: "#d8f3dc" }}
          >
            <button onClick={() => handleScroll("right")}>&gt;</button>
          </Box>
        )}
      </HStack>
    </Center>
  );
};
