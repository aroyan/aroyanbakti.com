import { Box, Center, Grid, useColorModeValue } from "@chakra-ui/react";
import CustomHead from "./headMeta";
import Navbar from "../navbar";

export default function BlogLayout({ children, title }) {
  const BG = useColorModeValue("#fdf6e3", "#002b36");
  return (
    <>
      <CustomHead title={title} />
      <Box bg={BG} maxW={"full"} as={"main"}>
        <Navbar />
        <Center py={"8"}>
          <Grid
            templateColumns={{ md: "repeat(2, 1fr)" }}
            gap={"8"}
            width={"container.md"}
            justifyContent={"center"}
            // alignItems={"center"}
          >
            {children}
          </Grid>
        </Center>
      </Box>
    </>
  );
}
