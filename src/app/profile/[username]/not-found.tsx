"use client";

import {
  Button,
  Center,
  Heading,
  Highlight,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGithub, FiHome } from "react-icons/fi";

// get username from params and show not found message
export default function NotFound() {
  const pathname = usePathname();
  const username = pathname?.split("/")[2] || "unknown";

  return (
    <Center flex="1">
      <Stack gap={6} align="center" textAlign="center">
        <Heading size="2xl" color="destructive/80">
          404 - User Not Found!
        </Heading>

        <Text color="fg.muted" fontSize="lg" maxW="md">
          <Highlight
            query={username || "unknown"}
            styles={{ bg: "primary/40", px: 1, rounded: "md" }}
          >
            {`Unfortunately, we couldn't find a GitHub user with the username "${username || "unknown"}".`}
          </Highlight>
        </Text>

        <Stack direction="row" align="center" w="full">
          <Separator flex="1" />
          <FiGithub size={20} color="var(--chakra-colors-fg-muted)" />
          <Separator flex="1" />
        </Stack>

        <Link href="/">
          <Button bg="primary" color="primary.fg" size="lg" px={8}>
            <FiHome />
            Back to Home
          </Button>
        </Link>
      </Stack>
    </Center>
  );
}
