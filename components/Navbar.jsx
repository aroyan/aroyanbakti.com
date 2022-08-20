import { Container, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import ToggleDarkMode from "./ToggleButton";
import NavItem from "./NavItem";

export default function Navbar() {
  const navBg = useColorModeValue("#eee8d5", "gray.900");
  return (
    <Container
      maxW={"full"}
      bg={navBg}
      p={"0"}
      boxShadow={"md"}
      position={"sticky"}
      top={"0"}
      zIndex={"2"}
    >
      <Container maxW={{ base: "full", md: "container.md" }} p={"0"}>
        <Flex p={"4"} align={"center"} justifyContent={"space-between"}>
          <Logo />
          <Flex gap="4">
            <NavItem />
            <ToggleDarkMode />
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
