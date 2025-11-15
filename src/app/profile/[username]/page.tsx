import { Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LuCalendar, LuMapPin, LuUsers } from "react-icons/lu";
import ProfileHeader from "@/app/profile/[username]/_components/profile-header";
import { UserInfoBox } from "@/app/profile/[username]/_components/user-info-box";
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
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  if (!username) {
    notFound();
  }

  const userData = await getUserData(username);

  if (!userData) {
    notFound();
  }

  return <ProfileHeader user={userData} />;
}
