import { Heading, VStack } from "@chakra-ui/react";
import Layout from "../components/layout/layout";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div>
      <Layout title={"Home"}>
        <VStack mt={"36"} h={"calc(62vh)"}>
          <Heading as={"h1"} fontSize={"3xl"} textAlign={"center"} mb={"4"}>
            I&apos;m a Front End Developer based in Indonesia
          </Heading>
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"regular"}
            fontSize={"2xl"}
          >
            Find me on
          </Heading>
          <Socials />
        </VStack>
      </Layout>
    </div>
  );
}
