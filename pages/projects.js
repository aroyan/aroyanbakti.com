import Layout from "../components/layout/layout";
import BlogPostWithImage from "../components/cards";

export default function projects() {
  return (
    <Layout>
      <BlogPostWithImage
        imageLink={"/images/unsplash1.jpg"}
        altImage={"Image 1"}
        heading={"CSS Illustration"}
        description={"Create a Illustration using CSS"}
        codeLink={"https://github.com/aroyan"}
        previewLink={"https://aroyanbakti.com"}
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
