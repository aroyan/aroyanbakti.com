import Link from "next/link";
import {
  Badge,
  HStack,
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";

const BlogCard = ({ meta }) => {
  const { title, slug, excerpt, date, tags } = meta;
  const [_, month, dt, year, ...rest] = new Date(date).toString().split(" ");

  return (
    <LinkBox
      border="1px dashed gray"
      rounded="md"
      p="4"
      _hover={{ border: "1px solid white" }}
      display="flex"
      flexDir="column"
      gap="4"
      justifyContent="space-between"
    >
      <Link href={`/blog/${slug}`} passHref>
        <LinkOverlay fontWeight="bold" fontSize="1.15rem" color="orange.400">
          {title}
        </LinkOverlay>
      </Link>
      <Text>{excerpt}</Text>
      <Flex wrap={"wrap"} gap="1">
        {tags.map((tag) => (
          <Badge key={tag} colorScheme="cyan">
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </Badge>
        ))}
      </Flex>
      <Text>{`${dt} ${month} ${year}`}</Text>
    </LinkBox>
  );
};

export default BlogCard;
