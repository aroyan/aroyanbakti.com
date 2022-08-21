import {
  Box,
  Center,
  Grid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomHead from "./HeadMeta";
import Navbar from "../Navbar";

export default function BlogLayout({ children, title }) {
  return (
    <>
      <CustomHead title={title} />
      <Box maxW={"full"} as={"main"}>
        <Navbar />
        <Center pb={"8"}>
          <Grid
            templateColumns={{ md: "repeat(2, 1fr)" }}
            gap={"8"}
            width={"container.md"}
            justifyContent={"center"}
            margin={{ base: "8" }}
          >
            {children}
          </Grid>
        </Center>
      </Box>
    </>
  );
}
