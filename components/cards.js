import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
        maxW={"400px"}
        w={"full"}
        bg={bgColor}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          minH={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={{ base: "-20", md: "-12" }}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={imageLink}
            alt={altImage}
            layout={"responsive"}
            width={683}
            height={328}
          />
        </Box>
        <Stack>
          <Heading color={headingColor} fontSize={"2xl"} fontFamily={"body"}>
            {heading}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Link href={codeLink} isExternal>
            Code <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href={previewLink} isExternal>
            Preview <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
