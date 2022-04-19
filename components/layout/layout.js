import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import CustomHead from "./customHead";
import Navbar from "../navbar";

export default function Layout({ children, title }) {
  const BG = useColorModeValue("#fdf6e3", "#002b36");
  return (
    <>
      <CustomHead title={title} />
      <Box bg={BG} maxW={"full"} as={"main"}>
        <Navbar />
        <Container
          maxW={"container.md"}
          p={"4"}
          fontSize={"1.125rem"}
          height={"auto"}
        >
          {children}
        </Container>
      </Box>
    </>
  );
}
