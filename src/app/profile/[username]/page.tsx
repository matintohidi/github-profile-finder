import { VStack } from "@chakra-ui/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import ProfileHeader from "@/app/profile/[username]/_components/profile-header";
import Repositories from "@/app/profile/[username]/_components/repository";
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

  const userData = await getUserData(username);

  if (!userData) {
    notFound();
  }

  return (
    <VStack>
      <Link href="/" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>
        <LuArrowLeft style={{ display: "inline-block", marginRight: "8px" }} />
        Back to Search
      </Link>
      <ProfileHeader user={userData} />
      <Repositories 
        username={username} 
        page={currentPage}
        totalRepos={userData.public_repos}
      />
    </VStack>
  );
}
