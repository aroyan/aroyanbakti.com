import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import CustomHead from "./headMeta";
import Navbar from "../navbar";

export default function Layout({ children, title, content, card }) {
  const BG = useColorModeValue("#fdf6e3", "#1a202c");
  return (
    <>
      <CustomHead title={title} content={content} card={card} />
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
