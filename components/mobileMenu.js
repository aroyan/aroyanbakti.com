import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <Text display={"none"}>Hamburger</Text>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
              <Link href={"/projects"}>
                <a>Projects</a>
              </Link>
              <Link href={"/posts"}>
                <a>Posts</a>
              </Link>
            </VStack>
            <style jsx>
              {`
                a:hover {
                  text-decoration: underline;
                }
              `}
            </style>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
