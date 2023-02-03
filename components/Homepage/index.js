import Link from "next/link";

export const CTASection = () => {
  return (
    <>
      <div w={"full"}>
        <div w={"full"} justify={"center"}>
          <div maxW={"2xl"} spacing={6}>
            <p fontWeight={700} lineHeight={1.2}>
              Aroyan Bakti Setiawan
            </p>
            <p fontWeight={500} lineHeight={1.2}>
              Frontend developer and open source contributor. Currently open to
              fulltime or freelance work
            </p>
            <div direction={"row"}>
              <button
                bg="#41b6e6"
                rounded={"full"}
                color="black"
                _hover={{ bg: "#3da7d2" }}
                aria-label="Projects"
              >
                <Link href={"/projects"}>Projects</Link>
              </button>
              <button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                variant="outline"
                _hover={{ bg: "whiteAlpha.500" }}
                width={"90px"}
                aria-label="Blog"
              >
                <Link href={"/blog"}>Blog</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
