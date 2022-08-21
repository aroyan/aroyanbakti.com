import {
  Container,
  Flex,
  Spacer,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import ToggleDarkMode from "./ToggleButton";
import NavItem from "./NavItem";

export default function Navbar() {
  const navBg = useColorModeValue("white", "gray.900");
  const reverseNavItem = useBreakpointValue({ base: "row-reverse", lg: "row" });

  return (
    <Container
      maxW={"full"}
      bg={navBg}
      p={"0"}
      boxShadow={"sm"}
      position={"sticky"}
      top={"0"}
      zIndex={"2"}
    >
      <Container maxW={{ base: "full", md: "container.md" }} p={"0"}>
        <Flex p={"4"} align={"center"} justifyContent={"space-between"}>
          <Logo />
          <Flex gap="4" flexDir={reverseNavItem}>
            <NavItem />
            <ToggleDarkMode />
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
