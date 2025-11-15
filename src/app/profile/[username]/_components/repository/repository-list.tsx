"use client";

import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { REPOS_PER_PAGE } from "@/app/profile/[username]/_components/repository";
import { RepositoryCard } from "@/app/profile/[username]/_components/repository/repository-card";
import { RepositoryPagination } from "@/app/profile/[username]/_components/repository/repository-pagination";
import type { GithubRepository } from "@/interfaces/github.interface";

interface RepositoryListProps {
  repositories: GithubRepository[];
  currentPage: number;
  totalRepos: number;
}

export function RepositoryList({
  repositories,
  currentPage,
  totalRepos,
}: RepositoryListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
	
  const totalPages = Math.ceil(totalRepos / REPOS_PER_PAGE);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (repositories.length === 0 && currentPage === 1) {
    return (
      <Box
        borderWidth={1}
        rounded="md"
        p={8}
        bg="bg.panel"
        textAlign="center"
        width="100%"
      >
        <Text color="fg.muted">No public repositories found</Text>
      </Box>
    );
  }

  return (
    <VStack mt={4} align="start" gap={4} width="100%">
      <Heading size="lg" fontWeight="bold">
        Repository ({totalRepos})
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        width="100%"
				mb={4}
      >
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </Grid>

      <RepositoryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </VStack>
  );
}
