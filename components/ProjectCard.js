import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  imageLink,
  altImage,
  p,
  description,
  codeLink,
  previewLink,
}) {
  return (
    <div py={6}>
      <div maxW={"400px"} w={"full"} rounded={"md"} p={6} overflow={"hidden"}>
        <div
          minH={"210px"}
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
        </div>
        <div mb={"4"}>
          <p fontSize={"2xl"} fontFamily={"body"}>
            {p}
          </p>
          <p>{description}</p>
        </div>

        <div mt={2} direction={"row"} spacing={4} align={"div"}>
          <Link href={codeLink} _hover={{ textDecor: "underline" }}>
            Code
          </Link>
          <Link
            href={previewLink}
            rel="noreferrer"
            target="_blank"
            _hover={{ textDecor: "underline" }}
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
