import { Container, Stack } from "@chakra-ui/react";
import { CTASection } from "../components/Homepage";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout
      title={"Home"}
      content={
        "Hello, my name is Aroyan Bakti Setiawan. I'm a frontend developer based in Indonesia"
      }
    >
      <Container maxW={"5xl"}>
        <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <CTASection />
        </Stack>
      </Container>
    </Layout>
  );
}
