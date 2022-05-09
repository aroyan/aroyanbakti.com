import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../components/logo";
import ToggleDarkMode from "../components/toggle-button";

const Links = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Blog", url: "/blog" },
  { title: "Experimental", url: "/experimental" },
];

const NavLink = ({ children, url }) => (
  <Link
    px={2}
    py={1}
    textAlign={{ base: "end" }}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={url}
  >
    {children}
  </Link>
);

export default function Experimental() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box h={"10000px"}>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"sticky"}
        top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Logo />
          <Flex>
            <Box display={{ base: "inline-block", md: "none" }}>
              <ToggleDarkMode />
            </Box>
            <HStack spacing={8} alignItems={"center"} ml={"4"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link.title} url={link.url}>
                    {link.title}
                  </NavLink>
                ))}
                <ToggleDarkMode />
              </HStack>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title} url={link.url}>
                  {link.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
