import { Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layout/layout";
import Socials from "../components/socialList";

export default function Home() {
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  return (
    <Layout title={"Home"}>
      <VStack mt={"36"} h={"calc(62vh)"}>
        <Heading
          as={"h1"}
          fontSize={"3xl"}
          textAlign={"center"}
          mb={"4"}
          color={textColor}
        >
          Frontend Developer based in Indonesia
        </Heading>
        <Heading
          as="h2"
          textAlign={"center"}
          fontWeight={"regular"}
          fontSize={"2xl"}
          color={textColor}
        >
          Find me on
        </Heading>
        <Socials />
      </VStack>
    </Layout>
  );
}
