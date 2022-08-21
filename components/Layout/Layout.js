import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import CustomHead from "./HeadMeta";
import Navbar from "../Navbar";

export default function Layout({ children, title, content, card }) {
  return (
    <>
      <CustomHead title={title} content={content} card={card} />
      <Box maxW={"full"} as={"main"}>
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
