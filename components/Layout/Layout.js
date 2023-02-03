import CustomHead from "./HeadMeta";
import Navbar from "../Navbar";

export default function Layout({ children, title, content, card }) {
  return (
    <>
      <CustomHead title={title} content={content} card={card} />
      <div maxW={"full"} as={"main"}>
        <Navbar />
        <div
          maxW={"container.md"}
          p={"4"}
          fontSize={"1.125rem"}
          height={"auto"}
        >
          {children}
        </div>
      </div>
    </>
  );
}
