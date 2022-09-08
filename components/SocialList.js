import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import {
  Button,
  Link,
  List,
  ListItem,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function Socials() {
  const githubLogo = useColorModeValue("#333", "#f0f6fc");

  return (
    <>
      <List>
        <ListItem>
          <VStack>
            <Link
              href="https://github.com/aroyan"
              isExternal
              _hover={{ color: githubLogo }}
            >
              <Button width={"8rem"} mb={"2"} leftIcon={<BsGithub />}>
                GitHub
              </Button>
            </Link>
          </VStack>
        </ListItem>
        <ListItem>
          <Link
            href="https://linkedin.com/in/aroyanbakti/"
            isExternal
            _hover={{ color: "#0A66C2" }}
          >
            <Button width={"8rem"} mb={"2"} leftIcon={<BsLinkedin />}>
              LinkedIn
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://youtube.com/aroyanbakti"
            isExternal
            _hover={{ color: "#c4302b " }}
          >
            <Button width={"8rem"} leftIcon={<BsYoutube />}>
              YouTube
            </Button>
          </Link>
        </ListItem>
      </List>
    </>
  );
}
