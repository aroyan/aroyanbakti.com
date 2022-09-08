import Link from "next/link";
import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text fontWeight={"bold"} fontSize={"2xl"} _hover={{ color: "gray" }}>
      <Link href={"/"}>Aroyan</Link>
    </Text>
  );
}
