import { extendTheme } from "@chakra-ui/react";
import { customColors as colors } from "./foundation/colors";

const customTheme = extendTheme({
  colors,
});

export { customTheme };
