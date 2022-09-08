import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleDarkMode() {
  const { toggleColorMode } = useColorMode();
  const icons = useColorModeValue(<MoonIcon />, <SunIcon />);
  return (
    <>
      <IconButton
        aria-label="Dark Mode Button"
        onClick={toggleColorMode}
        icon={icons}
      />
    </>
  );
}
