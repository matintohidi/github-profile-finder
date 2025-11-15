import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { LuGitBranch, LuGitFork, LuStar } from "react-icons/lu";
import { getLanguageColor } from "@/configs/language-colors";
import type { GithubRepository } from "@/interfaces/github.interface";

interface RepositoryCardProps {
  repository: GithubRepository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const languageColor = getLanguageColor(repository.language);

  return (
    <Link href={repository.html_url} target="_blank" rel="noopener noreferrer">
      <VStack
        borderWidth={1}
        rounded="md"
        p={4}
        bg="bg.panel"
        height="100%"
        minHeight="130px"
        _hover={{
          borderColor: "muted",
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
				align="start"
        transition="all 0.2s"
      >
        <VStack align="start" gap={3} height="100%" justifyContent="space-between">
          <VStack align="start" gap={1}>
            <Text fontSize="lg" fontWeight="bold" color="colorPalette.fg">
              {repository.name}
            </Text>
            {repository.description && (
              <Text
                fontSize="sm"
                color="fg.muted"
                lineClamp={2}
              >
                {repository.description}
              </Text>
            )}
          </VStack>

          <HStack justify="space-between" gap={2}>
            <HStack gap={3}>
              {repository.language && (
                <HStack gap={1}>
                  <Box width={3} height={3} rounded="full" bg={languageColor} />
                  <Text fontSize="sm" color="fg.muted" fontFamily="mono">
                    {repository.language}
                  </Text>
                </HStack>
              )}
              <HStack gap={1}>
                <LuStar size={16} />
                <Text fontSize="sm" color="fg.muted">
                  {repository.stargazers_count}
                </Text>
              </HStack>
              <HStack gap={1}>
                <LuGitFork size={16} />
                <Text fontSize="sm" color="fg.muted">
                  {repository.forks_count}
                </Text>
              </HStack>
              <HStack gap={1}>
								<LuGitBranch size={16} />
                <Text fontSize="sm" color="fg.muted">
                  {repository.default_branch}
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Link>
  );
}
