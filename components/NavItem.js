import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function NavItem() {
  const navItemsColor = useColorModeValue("dark", "white");
  const hoverEffect = {
    textDecoration: "underline",
    textDecorationColor: "blue.400",
    textDecorationThickness: "4px",
  };
  const hamburgerDisplay = useBreakpointValue({ base: "block", lg: "none" });
  const menuDisplay = useBreakpointValue({ base: "none", lg: "flex" });

  return (
    <Flex color={navItemsColor}>
      <Box display={hamburgerDisplay}>
        <Menu>
          <MenuButton as={Button} cursor={"pointer"}>
            <Text color={"transparent"} display="none">
              Hamburger
            </Text>
            <HamburgerIcon />
          </MenuButton>
          <MenuList alignItems={"center"}>
            <Link href={"/projects"} passHref>
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link href={"/blog"} passHref>
              <MenuItem>Blog</MenuItem>
            </Link>
            <Link href={"/contact"} passHref>
              <MenuItem>Contact</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Flex display={menuDisplay} flexDir={"row"}>
        <Box ml={"4"} p={"2"} _hover={hoverEffect}>
          <Link href={"/projects"}>Projects</Link>
        </Box>
        <Box ml={"4"} p={"2"} _hover={hoverEffect}>
          <Link href={"/blog"}>Blog</Link>
        </Box>
        <Button
          bgColor="blue.400"
          color="white"
          ml={"4"}
          _hover={{ bg: "blue.500" }}
        >
          <Link href={"/contact"}>Contact</Link>
        </Button>
      </Flex>
    </Flex>
  );
}
