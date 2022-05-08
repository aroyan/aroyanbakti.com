import {
  Box,
  Center,
  Heading,
  Text,
  Link,
  Stack,
  useColorModeValue,
  GridItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

const arrTitle = [];

export default function BlogCard({ blog }) {
  arrTitle.push(blog.fields.title);
  const firstCard = arrTitle[0];
  const { title, slug, thumbnail, blogPost } = blog.fields;
  const { createdAt } = blog.sys;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-au", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <GridItem
        maxW={title === firstCard ? { md: "full" } : "350px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        _hover={{
          transform: "scale(1.008)",
          transition: "all .2s ease-in-out",
        }}
        colSpan={title === firstCard ? { md: 2 } : 1}
      >
        <Box
          h={"auto"}
          bg={useColorModeValue("white", "gray.900")}
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
              layout={"responsive"}
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
              fontSize={"xl"}
              fontFamily={"body"}
              color={useColorModeValue("gray.700", "white")}
              _hover={{ textDecor: "none" }}
            >
              {title}
            </Link>
          </NextLink>
        </Stack>
        <Stack mt={4} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.500"}>{formattedDate}</Text>
          </Stack>
        </Stack>
      </GridItem>
    </>
  );
}
