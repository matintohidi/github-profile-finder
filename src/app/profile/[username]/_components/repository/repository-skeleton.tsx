import { Box, Grid, HStack, Skeleton, VStack } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

export default function RepositoriesSkeleton() {
  return (
    <VStack width="100%" gap={4} mt={6}>
      <Skeleton height="40px" width="200px" alignSelf="flex-start" />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        width="100%"
      >
        {[...Array(6)].map(() => (
          <Box
            key={`skeleton-repo-${uuid()}`}
            borderWidth={1}
            rounded="md"
            p={4}
            bg="bg.panel"
            minHeight="130px"
          >
            <VStack align="start" gap={3} height="100%">
              <VStack align="start" gap={1} width="100%">
                <Skeleton height="24px" width="70%" />
                <Skeleton height="16px" width="100%" />
                <Skeleton height="16px" width="90%" />
              </VStack>
              <HStack gap={3} mt="auto">
                <Skeleton height="16px" width="60px" />
                <Skeleton height="16px" width="40px" />
                <Skeleton height="16px" width="40px" />
              </HStack>
            </VStack>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}