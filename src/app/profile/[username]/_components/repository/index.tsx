import { redirect } from "next/navigation";
import { RepositoryList } from "@/app/profile/[username]/_components/repository/repository-list";
import { API_URL } from "@/configs/app.config";
import type { GithubRepository } from "@/interfaces/github.interface";

export const REPOS_PER_PAGE = 6;

async function getRepositories(
  username: string,
  page: number
): Promise<GithubRepository[]> {
  try {
    const response = await fetch(
      `${API_URL}/users/${username}/repos?sort=updated&per_page=${REPOS_PER_PAGE}&page=${page}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch {
    return [];
  }
}

interface RepositoriesProps {
  username: string;
  page: number;
  totalRepos: number;
}

export default async function Repositories({ 
  username, 
  page,
  totalRepos 
}: RepositoriesProps) {
  const totalPages = Math.ceil(totalRepos / REPOS_PER_PAGE);
  
  if (page > totalPages && totalPages > 0) {
    redirect(`/profile/${username}?page=${totalPages}`);
  }
  
  if (page < 1) {
    redirect(`/profile/${username}?page=1`);
  }

  const repositories = await getRepositories(username, page);

  return (
    <RepositoryList 
      repositories={repositories} 
      currentPage={page}
      totalRepos={totalRepos}
      username={username}
    />
  );
}