import { Badge, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";

const BlogCard = ({ meta }) => {
  const { title, slug, excerpt, date, tags } = meta;
  // eslint-disable-next-line no-unused-vars
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
