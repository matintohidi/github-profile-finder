import { Center, Stack, Text } from "@chakra-ui/react";
import Search from "@/app/(home)/_components/search";

export default function Home() {
  return (
    <Center flex="1" textAlign="center">
      <Stack gap={12} maxWidth="600px" px={4}>
        <Stack gap={2}>
          <Text fontSize="3xl" fontWeight="bold">
            GitHub Profile Finder
          </Text>
          <Text fontSize="lg" color="fg.muted">
            Discover and explore GitHub profiles with ease
          </Text>
        </Stack>
        <Search />
        <Text fontSize="sm" color="fg.muted">
          Enter any GitHub username to view their profile, repositories, and activity
        </Text>
      </Stack>
    </Center>
  );
}
