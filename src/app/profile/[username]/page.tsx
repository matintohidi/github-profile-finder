import { VStack } from "@chakra-ui/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LuArrowLeft } from "react-icons/lu";
import ProfileHeader from "@/app/profile/[username]/_components/profile-header";
import { ProfileHeaderSkeleton } from "@/app/profile/[username]/_components/profile-header/profile-skeleton";
import Repositories from "@/app/profile/[username]/_components/repository";
import RepositoriesSkeleton from "@/app/profile/[username]/_components/repository/repository-skeleton";
import { API_URL } from "@/configs/app.config";
import type { GithubUser } from "@/interfaces/github.interface";

async function getUserData(username: string): Promise<GithubUser | null> {
  try {
    const response = await fetch(`${API_URL}/users/${username}`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

async function ProfileHeaderWrapper({ username }: { username: string }) {
  const userData = await getUserData(username);

  if (!userData) {
    notFound();
  }

  return <ProfileHeader user={userData} />;
}

async function RepositoriesWrapper({
  username,
  page,
}: {
  username: string;
  page: number;
}) {
  const userData = await getUserData(username);

  if (!userData) {
    return null;
  }

  return (
    <Repositories
      username={username}
      page={page}
      totalRepos={userData.public_repos}
    />
  );
}

export default async function ProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { username } = await params;
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;

  if (!username) {
    notFound();
  }

  return (
    <VStack>
      <Link href="/" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>
        <LuArrowLeft style={{ display: "inline-block", marginRight: "8px" }} />
        Back to Search
      </Link>
      <Suspense fallback={<ProfileHeaderSkeleton />}>
        <ProfileHeaderWrapper username={username} />
      </Suspense>
      <Suspense fallback={<RepositoriesSkeleton />}>
        <RepositoriesWrapper username={username} page={currentPage} />
      </Suspense>
    </VStack>
  );
}
