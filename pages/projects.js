import Layout from "../components/layout/layout";
import BlogPostWithImage from "../components/cards";

export default function projects() {
  return (
    <Layout>
      <BlogPostWithImage
        imageLink={"/images/chat-app-css.jpg"}
        altImage={"Chat App CSS Illustration"}
        heading={"Chat App CSS Illustration"}
        description={"Create a Illustration using CSS"}
        codeLink={"https://github.com/aroyan/chat-app"}
        previewLink={"https://aroyan.github.io/chat-app"}
      />
      <BlogPostWithImage
        imageLink={"/images/unsplash1.jpg"}
        altImage={"Image 2"}
        heading={"CSS Illustration"}
        description={"Create a Illustration using CSS"}
        codeLink={"https://github.com/aroyan"}
        previewLink={"https://aroyanbakti.com"}
      />
    </Layout>
  );
}
