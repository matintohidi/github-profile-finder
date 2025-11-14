import { notFound } from "next/navigation";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  if (!username || username === "not-found") {
    notFound();
  }

	return (
		<div>
			<h1>matintohidi</h1>
			<p>@matintohidi</p>
		</div>
	)
}