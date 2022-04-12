import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function DesktopMenu() {
  const navItemsColor = useColorModeValue("dark", "white");
  const hoverEffect = { textDecoration: "underline" };

  return (
    <Flex
      color={navItemsColor}
      display={{ base: "none", md: "flex" }}
      ml={"96"}
    >
      <Box p={"2"} _hover={hoverEffect}>
        <Link href={"/projects"}>Projects</Link>
      </Box>
      <Box ml={"4"} p={"2"} _hover={hoverEffect}>
        <Link href={"/posts"}>Posts</Link>
      </Box>
    </Flex>
  );
}
