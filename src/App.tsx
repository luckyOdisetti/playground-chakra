import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  VStack,
  Box,
  Flex,
  Grid,
  Button,
  useColorMode,
} from "@chakra-ui/react";

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <VStack>
      <Box w={"100%"}>
        <Flex
          direction={"row"}
          justifyContent="space-around"
          bg={"blue.50"}
          p={10}
        >
          <Box>One</Box>
          <Box>Two</Box>
          <Box>Three</Box>
          <Box>Four</Box>
        </Flex>
      </Box>
      <Grid
        templateColumns={"repeat(auto-fill, minmax(250px, 300px))"}
        gap="10"
        justifyContent={"center"}
        w="100%"
        background={"layout"}
      >
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
        <Box w={250} h={250} border="1px solid blue">
          Filters
        </Box>
      </Grid>
      <Button
        color="text"
        bg="primary"
        _hover={{ bg: "primary" }}
        onClick={() => toggleColorMode()}
      >
        Change Theme
      </Button>
    </VStack>
  );
}

export default App;
