import Link from "next/link";

const BlogCard = ({ meta }) => {
  const { title, slug, excerpt, date, tags } = meta;
  // eslint-disable-next-line no-unused-vars
  const [_, month, dt, year, ...rest] = new Date(date).toString().split(" ");

  return (
    <div
      border="1px dashed gray"
      rounded="md"
      p="4"
      _hover={{ border: "1px solid orange" }}
      display="flex"
      flexDir="column"
      gap="4"
      justifyContent="space-between"
    >
      <Link href={`/blog/${slug}`} passHref>
        <div fontWeight="bold" fontSize="1.15rem" color="orange.400">
          {title}
        </div>
      </Link>
      <p>{excerpt}</p>
      <div wrap={"wrap"} gap="1">
        {tags.map((tag) => (
          <div key={tag} colorScheme="cyan">
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
      <p>{`${dt} ${month} ${year}`}</p>
    </div>
  );
};

export default BlogCard;
