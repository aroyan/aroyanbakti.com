import Layout from "../components/layout/layout";
import BlogPostWithImage from "../components/cards";

export default function projects() {
  return (
    <Layout title={"Projects"}>
      <BlogPostWithImage
        imageLink={"/images/chat-app-css.jpg"}
        altImage={"Chat App CSS Illustration"}
        heading={"Chat App CSS Illustration"}
        description={"Create a Illustration using CSS"}
        codeLink={"https://github.com/aroyan/chat-app"}
        previewLink={"https://aroyan.github.io/chat-app"}
      />
      <BlogPostWithImage
        imageLink={"/images/manage-landing-preview.png"}
        altImage={"Manage Landing Page"}
        heading={"Manage Landing Page"}
        description={"Landing page created with HTML, SCSS, and JavaScript"}
        codeLink={"https://github.com/aroyan/manage-landing"}
        previewLink={"https://aroyan.github.io/manage-landing/"}
      />
      <BlogPostWithImage
        imageLink={"/images/drum-machine-preview.png"}
        altImage={"Drum Machine Preview"}
        heading={"Simple Drum Machine"}
        description={
          "Simple Drum Machine built with React and ChakraUI for Front End Libraries Development projects by freeCodeCamp"
        }
        codeLink={"https://github.com/aroyan/drum-machine"}
        previewLink={"https://drum-machine-arbase.vercel.app/"}
      />
    </Layout>
  );
}
