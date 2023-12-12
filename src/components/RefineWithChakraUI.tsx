"use client";

import { Box, Flex } from "@chakra-ui/react";
import { DateField, List, TagField, TextField } from "@refinedev/chakra-ui";
import { useList } from "@refinedev/core";

type ProductProps = {
  id: number;
  title: string;
  status: string;
  publishedAt: string;
  status_color: string;
};

export const RefineWithChakraUIComp = () => {
  const { data, isLoading } = useList<ProductProps>({
    resource: "posts",
  });
  const posts = data?.data;

  return (
    <Box>
      {isLoading ? (
        <TextField p="2rem" value="Fetching posts..." />
      ) : (
        <List title="7. Refine With Chakra UI">
          {posts?.slice(0, 6).map((item) => (
            <Box
              key={item.id}
              bg="brand.white200"
              border="1px solid"
              borderColor="brand.green100"
              borderRadius="1rem"
              mb="1rem"
              overflow="hidden"
              p="1rem"
            >
              <Flex>
                <TextField fontWeight="700" mr="1rem" value="Title:" />
                <TextField value={item.title} />
              </Flex>

              <Flex>
                <TextField fontWeight="700" mr="1rem" value="Status:" />
                <TagField
                  bg={item.status_color}
                  color="brand.white100"
                  value={item.status}
                />
              </Flex>
              <Flex>
                <TextField fontWeight="700" mr="1rem" value="Published Date:" />
                <DateField value={item.publishedAt} />{" "}
              </Flex>
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
};
