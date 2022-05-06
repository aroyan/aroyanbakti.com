import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme(
  { config },
  withProse({
    baseStyle: {
      code: {
        background: "#151718",
        padding: "1rem",
        borderRadius: "0.5rem",
      },
    },
  })
);

export default theme;
