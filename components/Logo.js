import Link from "next/link";

export default function Logo() {
  return (
    <p fontWeight={"bold"} fontSize={"2xl"} _hover={{ color: "gray" }}>
      <Link href={"/"}>Aroyan</Link>
    </p>
  );
}
