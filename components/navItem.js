import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function NavItem() {
  const navItemsColor = useColorModeValue("dark", "white");
  const hoverEffect = { textDecoration: "underline" };

  return (
    <Flex color={navItemsColor}>
      <Box ml={"4"} p={"2"} _hover={hoverEffect}>
        <Link href={"/blog"}>Blog</Link>
      </Box>
    </Flex>
  );
}
