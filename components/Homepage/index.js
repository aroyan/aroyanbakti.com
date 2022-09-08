import {
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { IconContext } from "react-icons";
import Link from "next/link";

export const CTASection = () => {
  return (
    <>
      <Flex w={"full"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={"2xl"} spacing={6}>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Aroyan Bakti Setiawan
            </Text>
            <Text
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            >
              Frontend developer and open source contributor. Currently open to
              fulltime or freelance work
            </Text>
            <Stack direction={"row"}>
              <Button
                bg="#41b6e6"
                rounded={"full"}
                color="black"
                _hover={{ bg: "#3da7d2" }}
              >
                <Link href={"/projects"}>Projects</Link>
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                variant="outline"
                _hover={{ bg: "whiteAlpha.500" }}
                width={"90px"}
              >
                <Link href={"/blog"}>Blog</Link>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Flex justify="center">
        <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
          <a href="https://github.com/aroyan" target="_blank" rel="noreferrer">
            <GoMarkGithub style={{ marginRight: "32px" }} />
          </a>
          <a
            href="https://linkedin.com/in/aroyanbakti"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
        </IconContext.Provider>
      </Flex>
    </>
  );
};
