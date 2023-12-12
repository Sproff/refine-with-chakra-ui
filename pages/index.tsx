import { Box } from "@chakra-ui/react";
import { RefineWithChakraUIComp } from "@components/RefineWithChakraUI";

export default function Index() {
  return (
    <Box p="3rem">
      <RefineWithChakraUIComp />
    </Box>
  );
}

Index.noLayout = true;
