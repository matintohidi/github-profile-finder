import {
  Box,
  Flex,
  ScrollArea,
  Separator,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import UserCard from "@/app/(home)/_components/search-result/user-card";
import type { GithubUserSummary } from "@/interfaces/github.interface";

interface SearchResultProps {
  result: GithubUserSummary[];
  loading: boolean;
}

function NotFound() {
  return (
    <Text textAlign="center" py={4}>
      No users found.
    </Text>
  );
}

function Loading() {
  return (
    <Flex align="center" justify="center" gap={2}>
      <Text textAlign="center" py={4}>
        Searching...
      </Text>
      <Spinner size="md" />
    </Flex>
  );
}

function UserList({ result }: { result: GithubUserSummary[] }) {
  return (
    <ScrollArea.Root maxHeight="280px">
      <ScrollArea.Viewport>
        <Stack gap={0}>
          {result.map((user, index) => (
            <Box key={user.id}>
              <UserCard
                user={user}
                isFirst={index === 0}
                isLast={index === result.length - 1}
              />
              {index < result.length - 1 && <Separator />}
            </Box>
          ))}
        </Stack>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

export default function SearchResult({ result, loading }: SearchResultProps) {
  return (
    <Box rounded="md" boxShadow="md">
      {loading ? (
        <Loading />
      ) : result.length === 0 ? (
        <NotFound />
      ) : (
        <UserList result={result} />
      )}
    </Box>
  );
}
