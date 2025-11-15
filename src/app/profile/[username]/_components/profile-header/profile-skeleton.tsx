import {
  Box,
  Grid,
  Skeleton,
  SkeletonCircle,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

export async function ProfileHeaderSkeleton() {
  return (
    <Box borderWidth={1} rounded="md" p={6} bg="bg.panel" width="100%">
      <Stack direction={{ base: "column", md: "row" }} gap={6} align="start">
        <Box flexShrink={0}>
          <SkeletonCircle size="120px" />
        </Box>

        <VStack align="start" flex={1} gap={3} width="100%">
          <VStack align="start" gap={1} width="100%">
            <Skeleton height="32px" width="200px" />
            <Skeleton height="24px" width="150px" />
          </VStack>

          <Skeleton height="20px" width="80%" />
          <Skeleton height="20px" width="60%" />

          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={{ base: 3, sm: 4 }}
            width="100%"
            mt={2}
          >
            {[...Array(5)].map(
              (_) => (
                <Box
                  key={`skeleton-info-${uuid()}`}
                  p={3}
                  borderWidth={1}
                  rounded="md"
                >
                  <Skeleton height="16px" width="60%" mb={2} />
                  <Skeleton height="20px" width="80%" />
                </Box>
              ),
            )}
          </Grid>
        </VStack>
      </Stack>
    </Box>
  );
}
