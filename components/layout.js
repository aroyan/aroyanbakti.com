import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
