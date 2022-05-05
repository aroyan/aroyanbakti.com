import { Flex, Heading } from "@chakra-ui/react";

import Link from "next/link";

export default function BlogCard({ blog }) {
  const { title, slug } = blog.fields;
  return (
    <Flex
      width={"full"}
      justify={"space-between"}
      bg={"gray.600"}
      p={"1"}
      rounded={"lg"}
    >
      <Heading fontWeight={"normal"} fontSize={"2xl"}>
        {title}
      </Heading>
      <Link href={`/blog/${slug}`}>Read</Link>
    </Flex>
  );
}
