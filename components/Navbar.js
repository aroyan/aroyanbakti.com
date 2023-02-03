import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div
      maxW={"full"}
      p={"0"}
      boxShadow={"sm"}
      position={"sticky"}
      top={"0"}
      zIndex={"2"}
    >
      <div maxW={{ base: "full", md: "container.md" }} p={"0"}>
        <div p={"4"} align={"center"} justifyContent={"space-between"}>
          <Logo />
          <div gap="4">
            <NavItem />
          </div>
        </div>
      </div>
    </div>
  );
}
