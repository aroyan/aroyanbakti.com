import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import MobileMenu from "./mobileMenu";
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
          <Flex width={"28"} justifyContent={"flex-end"}>
            <ToggleDarkMode />
            <Spacer />
            <Flex display={{ base: "flex", md: "none" }} flexDir={"column"}>
              <MobileMenu />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
