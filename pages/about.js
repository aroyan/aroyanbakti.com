import Layout from "../components/layout/layout";
import ShareButton from "../components/ShareButton";

export default function About() {
  return (
    <Layout>
      About page
      <ShareButton text={"Share"} title={"As Props"} url={"Hello there"} />
    </Layout>
  );
}
