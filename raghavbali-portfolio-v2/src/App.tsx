import { Box, Button, Flex } from "@chakra-ui/react";
import "./style.css";

function App() {
  return (
    <div>
      <header style={{ display: "flex" }}>
        <Box h="md" w="md" bg="brand.primary" />
        <Flex
          h="md"
          w="md"
          bg="brand.secondary"
          fontSize="3xl"
          justifyContent="center"
          alignItems="center"
          bgGradient={`linear(to-r, brand.primary, brand.tertiary)`}
        >
          Hello!
        </Flex>
        <Box h="md" w="md" bg="brand.tertiary" />
      </header>
      <Flex justifyContent="center">
        <Button>Click me!</Button>
      </Flex>
    </div>
  );
}

export default App;
