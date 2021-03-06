import Layout from "../components/layout/layout";
import { Heading, Stack, Flex, Container } from "@chakra-ui/react";
import { ProjectListSection, CTASection } from "../components/homepage";

export default function Home() {
  return (
    <Layout
      title={"Home"}
      content={
        "Hello, my name is Aroyan Bakti Setiawan. I'm a frontend developer based in Indonesia. This website is my portfolio and I write a blog too"
      }
    >
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <CTASection />
        </Stack>
        <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading as="h2">Projects</Heading>
          <ProjectListSection />
        </Stack>
      </Container>
    </Layout>
  );
}
