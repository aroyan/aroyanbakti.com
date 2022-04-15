import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";

// Extracting props object
export default function BlogPostWithImage({
  imageLink,
  altImage,
  heading,
  description,
  codeLink,
  previewLink,
}) {
  const bgColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={bgColor}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={imageLink} alt={altImage} />
        </Box>
        <Stack>
          <Heading color={headingColor} fontSize={"2xl"} fontFamily={"body"}>
            {heading}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Link
            href={codeLink}
            _hover={{ textDecoration: "none" }}
            _focus={{ border: "none" }}
            isExternal
          >
            <Button>Code</Button>
          </Link>
          <Link
            href={previewLink}
            _hover={{ textDecoration: "none" }}
            _focus={{ border: "none" }}
            isExternal
          >
            <Button>Preview</Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
