import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar";

export default function Layout({ children }) {
  const BG = useColorModeValue("#fdf6e3", "#002b36");
  return (
    <Box bg={BG} maxW={"full"} as={"main"}>
      <Navbar />
      <Container
        maxW={"container.md"}
        p={"4"}
        fontSize={"1.125rem"}
        height={"calc(100vh - 72px)"}
      >
        {children}
      </Container>
    </Box>
  );
}
