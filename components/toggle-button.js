import {
  useColorModeValue,
  useColorMode,
  Button,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleDarkMode() {
  const { toggleColorMode } = useColorMode();
  const icons = useColorModeValue(<MoonIcon />, <SunIcon />);
  return (
    <>
      <Button as={"button"} onClick={toggleColorMode}>
        <Text display={"none"}>Dark Mode</Text>
        {icons}
      </Button>
    </>
  );
}
