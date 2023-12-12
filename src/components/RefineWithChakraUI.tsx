"use client";

import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useList } from "@refinedev/core";

type ProductProps = {
  id: number
  title: string;
  status: string;
  tags: string[];
};

export const RefineWithChakraUIComp = () => {
  const { data, isLoading } = useList<ProductProps>({
    resource: "posts",
  });

  const posts = data?.data;

  return (
    <Box mt="5rem">
      <Text fontSize="2rem">7. Refine With Chakra UI</Text>
      {isLoading ? (
        <Text p="2rem">Fetching posts...</Text>
      ) : (
        <SimpleGrid spacing={10} columns={[1, 2, 3]} py="2rem">
          {posts?.slice(0, 6).map((item) => (
            <Box
              key={item.id}
              bg="brand.white200"
              border="1px solid"
              borderColor="brand.green100"
              p="1rem"
              borderRadius="1rem"
            >
              <Box mt="1rem">
                <Flex>
                  <Text fontWeight="700" mr="1rem">
                    Title:
                  </Text>
                  <Text>{item.title}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight="700" mr="1rem">
                    Status:
                  </Text>
                  <Text>{item.status}</Text>
                </Flex>
              </Box>
              <Flex mx="auto" mt="1rem" columnGap={[".5rem", "2rem"]}>
                <Text fontWeight="700">Tags:</Text>
                {item.tags.map((list, idx) => (
                  <Text
                    key={idx}
                    bg="brand.green100"
                    color="brand.white100"
                    rounded="1rem"
                    textAlign="center"
                    p=".5rem 2rem"
                  >
                    {list}
                  </Text>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
