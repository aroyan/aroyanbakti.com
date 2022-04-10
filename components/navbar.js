import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import ToggleDarkMode from "./toggle-button";

export default function Navbar() {
  const navItemsColor = useColorModeValue("dark", "white");
  const navBg = useColorModeValue("#eee8d5", "#073642");
  const hoverEffect = { textDecoration: "underline" };
  return (
    <Container maxW={"full"} bg={navBg}>
      <Container maxW={"container.md"}>
        <Flex p={"4"} align={"center"} justifyContent={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"2xl"} _hover={{ color: "gray" }}>
            <Link href={"/"}>Aroyan</Link>
          </Text>
          <Flex
            color={navItemsColor}
            display={{ base: "none", md: "flex" }}
            ml={"96"}
          >
            <Box p={"2"} _hover={hoverEffect}>
              <Link href={"/projects"}>Projects</Link>
            </Box>
            <Box ml={"4"} p={"2"} _hover={hoverEffect}>
              <Link href={"/about"}>About</Link>
            </Box>
          </Flex>
          <Flex display={{ base: "flex", md: "none" }} flexDir={"column"}>
            Hamburger
          </Flex>
          <ToggleDarkMode />
        </Flex>
      </Container>
    </Container>
  );
}
