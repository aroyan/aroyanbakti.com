import CustomHead from "./HeadMeta";
import Navbar from "../Navbar";

export default function BlogLayout({ children, title }) {
  return (
    <>
      <CustomHead title={title} />
      <div maxW={"full"} as={"main"}>
        <Navbar />
        <div pb={"8"}>
          <div
            templateColumns={{ md: "repeat(2, 1fr)" }}
            gap={"8"}
            width={"container.md"}
            justifyContent={"center"}
            margin={{ base: "8" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
