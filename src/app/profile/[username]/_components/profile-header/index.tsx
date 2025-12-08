"use client";

import {
  Box,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { LuCalendar, LuLink, LuMapPin, LuUsers } from "react-icons/lu";
import { UserInfoBox } from "@/app/profile/[username]/_components/profile-header/user-info-box";
import type { GithubUser } from "@/interfaces/github.interface";

interface ProfileHeaderProps {
  user: GithubUser;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const date = new Date(user.created_at);
  const joinDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <Box borderWidth={1} rounded="md" p={6} bg="bg.panel" width="100%">
      <Stack direction={{ base: "column", md: "row" }} gap={6} align="start">
        <Box flexShrink={0}>
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={120}
            height={120}
            style={{
              borderRadius: "16px",
              border: "3px solid",
              borderColor: "var(--chakra-colors-border)",
            }}
          />
        </Box>

        <VStack align="start" flex={1} gap={3}>
          <VStack align="start" gap={1}>
            <Heading size="xl" fontWeight="bold">
              {user.name || user.login}
            </Heading>
            <HStack>
              <Text color="fg.muted" fontSize="lg">
                @{user.login}
              </Text>
              {user.company && (
                <>
                  <Text color="fg.muted">•</Text>
                  <Text color="fg.muted" fontSize="sm">
                    {user.company}
                  </Text>
                </>
              )}
            </HStack>
          </VStack>

          {user.bio && (
            <Text color="fg.emphasized" fontSize="md" maxW="2xl">
              {user.bio}
            </Text>
          )}

          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={{ base: 3, sm: 4 }}
            width="100%"
          >
            <UserInfoBox
              icon={LuUsers}
              label="Followers"
              value={user.followers.toLocaleString()}
            />
            <UserInfoBox
              icon={LuUsers}
              label="Following"
              value={user.following.toLocaleString()}
            />
            {user.location && (
              <UserInfoBox
                icon={LuMapPin}
                label="Location"
                value={user.location}
              />
            )}
            {user.blog && (
              <UserInfoBox
                icon={LuLink}
                label="Website"
                value={user.blog}
                link
              />
            )}
            <UserInfoBox icon={LuCalendar} label="Joined" value={joinDate} />
          </Grid>
        </VStack>
      </Stack>
    </Box>
  );
}
