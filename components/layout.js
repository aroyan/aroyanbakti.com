import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const BG = useColorModeValue("#fdf6e3", "#002b36");
  return (
    <Box bg={BG} maxW={"full"} as={"main"}>
      <Navbar />
      <Container
        maxW={"container.md"}
        p={"4"}
        fontSize={"1.125rem"}
        height={{ base: "auto", lg: "calc(100vh - 68px)" }}
      >
        {children}
      </Container>
    </Box>
  );
}
