import {
  Box,
  Center,
  Heading,
  Text,
  Link,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  const { title, slug, thumbnail, blogPost } = blog.fields;
  const { createdAt } = blog.sys;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-au", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const shortBlogPost = blogPost.content
    .filter((_, index) => {
      return index < 5;
    })
    .map((item) => item.content[0].value)
    .join(" ");
  console.log(shortBlogPost);
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
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
            cursor={"pointer"}
          >
            {/* eslint-disable @next/next/link-passhref */}
            <NextLink href={`/blog/${slug}`}>
              <Image
                src={`https:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                alt={title}
              />
            </NextLink>
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            {/* eslint-disable @next/next/link-passhref */}
            <NextLink href={`/blog/${slug}`}>
              <Link
                fontSize={"2xl"}
                fontFamily={"body"}
                color={useColorModeValue("gray.700", "white")}
                _hover={{ textDecor: "none" }}
              >
                {title}
              </Link>
            </NextLink>
            <NextLink href={`/blog/${slug}`}>
              <Link color={"gray.500"} _hover={{ textDecor: "none" }}>
                {shortBlogPost}
              </Link>
            </NextLink>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text color={"gray.500"}>{formattedDate}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
}
