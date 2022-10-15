import Layout from "@/components/Layout/Layout";
import ProjectCard from "@/components/ProjectCard";

export default function projects() {
  return (
    <Layout title={"Projects"}>
      <ProjectCard
        imageLink={"/images/chat-app.png"}
        altImage={"Chat App CSS Illustration"}
        heading={"Chat App CSS Illustration"}
        description={"Create an Illustration using CSS"}
        codeLink={"https://github.com/aroyan/chat-app"}
        previewLink={"https://aroyan.github.io/chat-app"}
      />
      <ProjectCard
        imageLink={"/images/countries-list-app.png"}
        altImage={"Countries List App"}
        heading={"Countries List App"}
        description={"Countries List App is a challenge from Frontendmentor"}
        codeLink={"https://github.com/aroyan/countries-lists"}
        previewLink={"https://countrieslist-frontendmentor.netlify.app"}
      />
      <ProjectCard
        imageLink={"/images/drum-machine.png"}
        altImage={"Drum Machine Preview"}
        heading={"Simple Drum Machine"}
        description={
          "Simple Drum Machine built with React and ChakraUI for Front End Libraries Development projects by freeCodeCamp"
        }
        codeLink={"https://github.com/aroyan/drum-machine"}
        previewLink={"https://drum-machine-arbase.vercel.app"}
      />
    </Layout>
  );
}
