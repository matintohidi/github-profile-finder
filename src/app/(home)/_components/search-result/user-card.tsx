import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { GithubUserSummary } from "@/interfaces/github.interface";

interface UserCardProps {
  user: GithubUserSummary;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function UserCard({ user, isFirst, isLast }: UserCardProps) {
  return (
    <Link href={`/profile/${user.login}`}>
      <Flex
        gap={2}
        px={4}
        py={4}
        align="center"
        transition="all 0.2s"
        _hover={{ bg: "primary/10" }}
        roundedTop={isFirst ? "md" : "none"}
        roundedBottom={isLast ? "md" : "none"}
      >
        <Box
          rounded="full"
          overflow="hidden"
          borderWidth={3}
          borderColor="primary"
        >
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={50}
            height={50}
          />
        </Box>
        <Text>{user.login}</Text>

        <Text
          ml="auto"
          fontSize="sm"
          color="fg.muted"
          _hover={{ color: "primary" }}
        >
          View More <LuArrowRight style={{ display: "inline" }} />
        </Text>
      </Flex>
    </Link>
  );
}
